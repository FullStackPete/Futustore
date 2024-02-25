import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Contexts";
import { CartContextValue } from "../../context/ShoppingCartProvider";
import { Link, useNavigate } from "react-router-dom";
import ItemsInCart from "../../components/CartComponents/ItemsInCart";
import PriceSummary from "../../components/CartComponents/PriceSummary";
function Cart() {
  const [cart, _] = useContext<CartContextValue | undefined>(
    ShoppingCartContext
  )!;
  const navigate = useNavigate();

  let finalPrice: number = 0;

  const navigateAddress = () => navigate("/cart/address");

  cart.map((item) => (finalPrice += item.product!.price * item.quantity));
  console.log(finalPrice);
  return (
    <>
      <div className="flex flex-col mt-28">
      <div className="md:flex md:flex-col md:justify-center md:items-center">
        <p className="text-2xl ml-4 font-semibold">
          {cart.length > 0 ? (
            <div className="md:text-center md:bg-white md:p-2 md:rounded-t-md">Your cart</div>
          ) : (
            <>
              <div className="md:text-center">Your cart is empty!<br/>
              <Link className="underline text-gray-500 text-xl" to="/home">
                Shop now!
              </Link>
              </div>
            </>
          )}
        </p>
        
          {cart.length > 0 && (
            <ul className="md:w-4/5 lg:w-3/5 md:bg-white flex flex-col mx-4 md:p-4 md:rounded-md">
              <ItemsInCart
                itemsHaveBorder={true}
                imageClass="w-20"
                hasInput={true}
                hasDeleteButton={true}
                hasFinalPrice={false}
              />
            </ul>
          )}
        </div>

        <PriceSummary handleBtnClick={navigateAddress} btnText="Continue" />
      </div>
    </>
  );
}

export default Cart;
