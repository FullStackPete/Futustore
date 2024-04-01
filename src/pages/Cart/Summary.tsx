import { useUserAddress } from "../../context/UserAddressProvider";
import CartHeader from "../../components/CartComponents/CartHeader";
import CartSection from "../../components/CartComponents/CartSection";
import ItemsInCart from "../../components/CartComponents/ItemsInCart";
import PriceSummary from "../../components/CartComponents/PriceSummary";
import { Link } from "react-router-dom";
function Summary() {
  const [userAddress] = useUserAddress();

  function handleOrder() {
    alert("Order success!");
  }
  return (
    <>
      <div className="mt-28">
        <div className="md:flex md:items-center md:justify-center">
          <div className="md:mb-4 md:w-4/5 lg:w-3/5 md:bg-white md:p-4 md:rounded-md">
            <CartHeader text="Review your order" />
            <div className="md:m-0 m-4">
              <div className="flex flex-row justify-between">
                <p className="text-xl font-medium">Address</p>
                <Link
                  to={"/Futustore/cart/address"}
                  className="text-blue-400 underline"
                >
                  Edit
                </Link>
              </div>
              <CartSection customClass="flex-col ">
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
              <PriceSummary handleBtnClick={handleOrder} btnText="Order" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
