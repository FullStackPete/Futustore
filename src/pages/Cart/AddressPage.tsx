import CartHeader from "../../components/CartComponents/CartHeader";
import AddressInput from "../../components/CartComponents/AddressInput";
import ContinueButton from "../../components/CartComponents/ContinueButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAddress } from "../../context/UserAddressProvider";
function AddressPage() {
  const [addressInputs, setAddressInputs] = useState({
    Name: "",
    Address: "",
    Postal: "",
    City: "",
    Phone: "",
    Email: "",
  });
  const [validateInputs, setValidateInputs] = useState({
    Name: false,
    Address: false,
    Postal: false,
    City: false,
    Phone: false,
    Email: false,
  });
  const navigate = useNavigate();
  const [userAddresses, addUserAddress] = useUserAddress();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
      console.log("userAddresses:",userAddresses);
      console.log("New Address:",newAddress);
      navigate("/cart/summary");
    } else {
      console.log("Niepoprawne dane w formularzu. ", validateInputs);
    }
  };
  return (
    <>
      <CartHeader text="Enter your address" />
      <form
        onSubmit={(e) => btnSubmit(e)}
        className="flex flex-col justify-center items-center my-2 "
      >
        <AddressInput
          setInputValidated={(isValid) =>
            setValidateInputs({ ...validateInputs, Name: isValid })
          }
          inputType="string"
          placeholder="Fullname"
          inputName="Name"
          type="text"
          onChange={handleValueChange}
        />
        <AddressInput
          onChange={handleValueChange}
          setInputValidated={(isValid) =>
            setValidateInputs({ ...validateInputs, Address: isValid })
          }
          inputType="string"
          placeholder="Address"
          inputName="Address"
          type="text"
        />
        <AddressInput
          onChange={handleValueChange}
          setInputValidated={(isValid) =>
            setValidateInputs({ ...validateInputs, Postal: isValid })
          }
          inputType="number"
          placeholder="Zip code"
          inputName="Postal"
          type="zip"
          maxLength={5}
        />
        <AddressInput
          onChange={handleValueChange}
          setInputValidated={(isValid) =>
            setValidateInputs({ ...validateInputs, City: isValid })
          }
          inputType="string"
          placeholder="City"
          inputName="City"
          type="text"
        />
        <AddressInput
          onChange={handleValueChange}
          setInputValidated={(isValid) =>
            setValidateInputs({ ...validateInputs, Phone: isValid })
          }
          inputType="number"
          minLength={8}
          maxLength={11}
          placeholder="Phone"
          inputName="Phone"
          type="tel"
        />
        <AddressInput
          onChange={handleValueChange}
          setInputValidated={(isValid) =>
            setValidateInputs({ ...validateInputs, Email: isValid })
          }
          inputType="email"
          placeholder="Email"
          inputName="Email"
          type="text"
        />
        <ContinueButton className=" " type="submit" text="Submit" />
      </form>
    </>
  );
}

export default AddressPage;
