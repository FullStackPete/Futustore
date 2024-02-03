import CartHeader from "../../components/CartComponents/CartHeader";
import AddressInput from "../../components/CartComponents/AddressInput";
import ContinueButton from "../../components/CartComponents/ContinueButton";

function AddressPage() {
  const btnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <CartHeader text="Enter your address" />
      <form
        onSubmit={(e) => btnSubmit(e)}
        className="flex flex-col justify-center items-center my-2"
      >
        <AddressInput
          inputType="string"
          placeholder="Fullname"
          inputName="Name"
          type="text"
        />
        <AddressInput
          inputType="string"
          placeholder="Address"
          inputName="Surname"
          type="text"
        />
        <AddressInput
          inputType="number"
          placeholder="Zip code"
          inputName="Postal"
          type="zip"
          minLength={5}
          maxLength={5}
        />
        <AddressInput
          inputType="string"
          placeholder="City"
          inputName="City"
          type="text"
        />
        <AddressInput
          inputType="number"
          minLength={6}
          maxLength={9}
          placeholder="Phone"
          inputName="Phone"
          type="tel"
        />
        <AddressInput
          inputType="string"
          placeholder="Email"
          inputName="Email"
          type="email"
        />
        <ContinueButton
          type="submit"
          LinkTo="/cart/summary"
          text="Submit"
        />
      </form>
    </>
  );
}

export default AddressPage;
