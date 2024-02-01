import CartHeader from "../../components/CartComponents/CartHeader";
import AddressInput from "../../components/CartComponents/AddressInput";
import ContinueButton from "../../components/CartComponents/ContinueButton";

function AddressPage() {
  const btnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <>
      <CartHeader text="Enter your address" />
      <form
        onSubmit={(e) => btnSubmit(e)} 
        className="flex flex-col justify-center items-center my-2"
      >
        <AddressInput placeholder="Fullname" inputName="Name" type="text" />
        <AddressInput
          placeholder="Address"
          inputName="Surname"
          type="text"
        />
        <AddressInput
          placeholder="Zip code"
          inputName="Postal"
          type="zip"
            maxLength={5}
        />
        <AddressInput placeholder="City" inputName="City" type="text" />
        <AddressInput maxLength={9} placeholder="Phone" inputName="Phone" type="tel" />
        <AddressInput placeholder="Email" inputName="Email" type="email" />
        <ContinueButton type="submit" LinkTo="/cart/summary" text="Submit"/>
      </form>
    </>
  );
}

export default AddressPage;
