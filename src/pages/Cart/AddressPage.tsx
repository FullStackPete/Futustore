import CartHeader from "../../components/CartComponents/CartHeader";
import AddressInput from "../../components/CartComponents/AddressInput";
import ContinueButton from "../../components/CartComponents/ContinueButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAddress } from "../../context/UserAddressProvider";
import { AddressType } from "../../models/models";
import { addressInputsModel } from "../../models/models";

function AddressPage() {
  let userAddressInState;
  const [userAddress, addUserAddress] = useUserAddress();
  console.log("Input validation set to false");
  const [validateInputs, setValidateInputs] = useState({
    Name: false,
    Address: false,
    Postal: false,
    City: false,
    Phone: false,
    Email: false,
  });
  console.log("Input validation set to false2");

  if (userAddress) {
    userAddressInState = userAddress;
  } else {
    userAddressInState = {
      Name: "",
      Address: "",
      Postal: "",
      City: "",
      Phone: "",
      Email: "",
    };
  }
  const [addressInputs, setAddressInputs] =
    useState<AddressType>(userAddressInState);

  const navigate = useNavigate();

  console.log(userAddress);
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("Value changed: ", { name, value });
    setAddressInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const btnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(validateInputs).every((isValid) => isValid)) {
      const newAddress = {
        Name: addressInputs.Name,
        Address: addressInputs.Address,
        Postal: addressInputs.Postal,
        City: addressInputs.City,
        Phone: addressInputs.Phone,
        Email: addressInputs.Email,
      };
      addUserAddress(newAddress);
      console.log("New Address:", newAddress);
      navigate("/cart/summary");
    } else {
      console.log("Niepoprawne dane w formularzu. ", validateInputs);
    }
  };

  return (
    <div className="mt-28 md:flex md:flex-col md:justify-center md:items-center">
      <div className="md:w-4/5 lg:w-3/5">
        <CartHeader text="Enter your address" />
        <form
          onSubmit={(e) => btnSubmit(e)}
          className="flex flex-col justify-center items-center md:bg-white md:rounded-md md:mb-4 md:p-4"
        >
          {addressInputsModel.map((input, index) => (
            <AddressInput
              key={index}
              type={input.type}
              inputName={input.name}
              placeholder={input.placeholder}
              inputType={input.inputType}
              minLength={input.minLength}
              maxLength={input.maxLength}
              onChange={handleValueChange}
              setInputValidated={(isValid) =>
                setValidateInputs((prev) => ({
                  ...prev,
                  [input.name as keyof typeof prev]: isValid,
                }))
              }
            />
          ))}
          <ContinueButton className=" " type="submit" text="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddressPage;
