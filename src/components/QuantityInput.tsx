import { quantityInputTypes } from "../models/models";

function QuantityInput({decreaseNumber,inputValue,increaseNumber,id,onChange, customClass}:quantityInputTypes) {

    return (  <><button
        onClick={decreaseNumber}
        className="px-2"
      >
        -
      </button>
      <input
      
      type="number"
        id={id}
        className={` border-black h-6 w-8 border-x text-center ` + customClass}
        value={inputValue}
        onChange={onChange}
      />
      <button
        className="px-2"
        onClick={increaseNumber}
      >
        +
      </button> </>);
      
}

export default QuantityInput;