import { useUserAddress } from "../../context/UserAddressProvider";
import CartHeader from "../../components/CartComponents/CartHeader";
import CartSection from "../../components/CartComponents/CartSection";
import ItemsInCart from "../../components/CartComponents/ItemsInCart";
import PriceSummary from "../../components/CartComponents/PriceSummary";
function Summary() {
  const [userAddress] = useUserAddress();

  function handleOrder() {
    alert("Order success!");
  }
  return (
    <>
      <div className="mt-28">
        <CartHeader text="Review your order" />
        <div className="m-4">
          <div className="flex flex-row justify-between">
            <p className="text-xl font-medium">Address</p>
            <p>Edit (not implemented yet)</p>
          </div>
          <CartSection customClass="flex-col">
            <p>{userAddress!.Name}</p>
            <p>{userAddress!.Address}</p>
            <p>
              {userAddress!.Postal} {userAddress!.City}
            </p>
            <p>{userAddress!.Phone}</p>
          </CartSection>
          <p className="text-xl font-medium mt-4">Your cart</p>

          <CartSection>
            <ItemsInCart
              itemsHaveBorder={false}
              imageClass="w-16"
              hasDeleteButton={false}
              hasFinalPrice={true}
              hasInput={false}
            />
          </CartSection>
          <PriceSummary handleBtnClick={handleOrder} btnText="Order"/>
        </div>
      </div>
    </>
  );
}

export default Summary;
