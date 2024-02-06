import CartHeader from "../../components/CartComponents/CartHeader";
import AddressInput from "../../components/CartComponents/AddressInput";
import ContinueButton from "../../components/CartComponents/ContinueButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddressPage() {
  const [validateInputs, setValidateInputs] = useState({
    Name: false,
    Address: false,
    Postal: false,
    City: false,
    Phone: false,
    Email: false,
  });
  const navigate = useNavigate();
  const btnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const navigateSummary = () => {
    if (Object.values(validateInputs).every((isValid) => isValid)) {
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
        />
        <AddressInput
          setInputValidated={(isValid) =>
            setValidateInputs({ ...validateInputs, Address: isValid })
          }
          inputType="string"
          placeholder="Address"
          inputName="Address"
          type="text"
        />
        <AddressInput
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
          setInputValidated={(isValid) =>
            setValidateInputs({ ...validateInputs, City: isValid })
          }
          inputType="string"
          placeholder="City"
          inputName="City"
          type="text"
        />
        <AddressInput
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
          setInputValidated={(isValid) =>
            setValidateInputs({ ...validateInputs, Email: isValid })
          }
          inputType="email"
          placeholder="Email"
          inputName="Email"
          type="text"
        />
        <ContinueButton
          onClick={navigateSummary}
          className=" "
          type="submit"
          text="Submit"
        />
      </form>
    </>
  );
}

export default AddressPage;
