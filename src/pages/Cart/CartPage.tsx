import { useContext } from "react";
import ContinueButton from "../../components/CartComponents/ContinueButton";
import {ShoppingCartContext} from "../../context/Contexts";
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
      <div className="flex flex-col">
        <p className="mt-28 text-2xl ml-4 font-semibold">
          {cart.length > 0 ? (
            "Your cart"
          ) : (
            <>
              <div>Your cart is empty!</div>
              <Link className="underline text-gray-500 text-xl" to="/home">
                Shop now!
              </Link>
            </>
          )}
        </p>
        {cart && (
          <ul className=" flex flex-col mx-4">
            <ItemsInCart itemsHaveBorder={true} imageClass="w-20" hasInput={true} hasDeleteButton={true} hasFinalPrice={false}/>
          </ul>
        )}
<PriceSummary handleBtnClick={navigateAddress} btnText="Continue"/>        
      </div>
    </>
  );
}

export default Cart;
