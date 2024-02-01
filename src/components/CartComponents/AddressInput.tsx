import { AddressInputProps } from "../../models/models";
function AddressInput({
  type,
  inputName,
  placeholder,
  maxLength,
}: AddressInputProps) {
  return (
    <>
      <label className="relative">
        <input
          maxLength={maxLength}
          type={type}
          name={inputName}
          placeholder=""
          className="text-xl m-4 border border-gray-400 outline-none w-80 focus:border-black text-black transition duration-200 rounded-md px-4 py-1"
          
        />
        <span className="text-lg text-black text-opacity-80 absolute left-5 top-5 ml-4 transition duration-200 input-text">
          {placeholder}
        </span>
      </label>
    </>
  );
}

export default AddressInput;
