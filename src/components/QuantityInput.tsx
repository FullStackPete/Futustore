import { quantityInputTypes } from "../models/models";

function QuantityInput({decreaseNumber,inputValue,increaseNumber,id, customClass}:quantityInputTypes) {

    return (  <>
    <div className="flex flex-row border border-black rounded-md m-2 bg-white">
    <button
        onClick={decreaseNumber}
        className="px-2"
      >
        -
      </button>
      <input
      
      max={10}
      min={1}
      type="number"
        id={id}
        className={`border-black h-6 w-8 border-x text-center bg-inherit ` + customClass}
        value={inputValue}        
      />
      <button
        className="px-2 "
        onClick={increaseNumber}
      >
        +
      </button></div> </>);
      
}

export default QuantityInput;