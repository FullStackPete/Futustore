import { AddressInputProps } from "../../models/models";
import { useState } from "react";
import { validationStatus } from "../../models/models";
function AddressInput({
  type,
  inputName,
  placeholder,
  maxLength,
  inputType,
  minLength,
}: AddressInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [validation, setValidation] = useState<validationStatus>("");


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (inputType === "number") {
      // Sprawdź, czy nowa wartość to liczba
      if (!isNaN(Number(newValue))) {
        //jesli nie jest nie-cyfrą - czyli jeśli jest cyfrą XD
        setInputValue(newValue);
        setValidation("Ok");
      } else {
        setValidation("Only numbers!");
      }
    } else if (inputType === "string") {
      setInputValue(newValue);
      setValidation("Ok");
    }
    if (newValue == "") return setValidation("");
  };
  return (
    <>
      <label className="relative">
        <input
          onChange={(e) => handleInput(e)}
          value={inputValue}
          minLength={minLength}
          maxLength={maxLength}
          type={type}
          name={inputName}
          placeholder=""
          className={`text-xl m-4 border border-gray-400 outline-none w-80 focus:border-black 
          text-black transition duration-200 rounded-md px-4 py-1 ${
            validation === ""
              ? ""
              : validation === "Ok"
              ? "input-address-ok"
              : "input-address-wrong"
          }`}
          required={true}
        />
        <span className="text-lg text-gray-400 text-opacity-80 absolute left-5 top-5 ml-4 transition duration-200 input-text">
          {placeholder}
        </span>
        {validation && (
          <span
            className={`validation absolute right-6 top-6 ml-4 bg-white transition duration-500 
          ${validation == "Ok" ? "validation-ok" : "validation-wrong"}`}
          >
            {validation}
          </span>
        )}
      </label>
    </>
  );
}

export default AddressInput;
