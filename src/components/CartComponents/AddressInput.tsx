import { AddressInputProps, AddressType } from "../../models/models";
import { useState, useEffect } from "react";
import { validationStatus } from "../../models/models";
import { useUserAddress } from "../../context/UserAddressProvider";
import validator from "validator";
import Icon from "../Icon";

function AddressInput({
  type,
  inputName,
  placeholder,
  maxLength,
  inputType,
  minLength,
  onChange,
  setInputValidated,
}: AddressInputProps) {
  const [userAddress, _] = useUserAddress();
  const initialInput = userAddress![inputName as keyof AddressType];
  const [inputValue, setInputValue] = useState(initialInput);
  const [validation, setValidation] = useState<validationStatus>("");

  const validate = (
    newValue: string,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Usunięcie spacji na początku wartości
    if (newValue.startsWith(" ")) {
      newValue = newValue.trimStart();
    }

    if (inputType === "number") {
      newValue = newValue.trim();
      // Sprawdź, czy nowa wartość to liczba
      if (!isNaN(Number(newValue))) {
        if (inputName === "Postal" && newValue.length < maxLength!) {
          setValidation("Must be 5 characters long!");
          setInputValidated(false);
          return setInputValue(newValue);
        } else if (inputName === "Phone" && newValue.length < minLength!) {
          setValidation("Minimum 8 characters long!");
          setInputValidated(false);
          return setInputValue(newValue);
        }
        setInputValue(newValue);
        setValidation("Ok");
        setInputValidated(true);
        console.log("inputValidated set to true")
        if (e) onChange(e);
      } else {
        setValidation("Type only numbers!");
        setInputValidated(false);
      }
    } else if (inputType === "email") {
      // Obsługa spacji tylko dla pola email
      newValue = newValue.replace(/^\s+/, "");
      setInputValue(newValue);
      if (validator.isEmail(newValue)) {
        setValidation("Ok");
        setInputValidated(true);
        if (e) onChange(e);
      } else {
        setValidation("Invalid email!");
        setInputValidated(false);
      }
    } else if (inputType === "string") {
      // Usunięcie nadmiarowych spacji
      newValue = newValue.replace(/\s+/g, " ");

      setInputValue(newValue);
      setValidation("Ok");
      setInputValidated(true);
      if (e) onChange(e);
    }

    // Ustawienie walidacji na puste, jeśli wartość jest pusta po usunięciu spacji
    if (newValue === "") {
      setInputValidated(false);
      return setValidation("");
    }
  };
  useEffect(() => {
    validate(initialInput);
  }, []);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    validate(newValue, e);
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
            className={`validation absolute right-6 top-6 ml-4 bg-white transition duration-200 
          ${validation == "Ok" ? "validation-ok" : "validation-wrong"}`}
          >
            {validation == "Ok" ? (
              <Icon className="" name="check" />
            ) : (
              validation
            )}
          </span>
        )}
      </label>
    </>
  );
}

export default AddressInput;
