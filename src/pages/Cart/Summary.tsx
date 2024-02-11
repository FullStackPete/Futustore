import { useUserAddress } from "../../context/UserAddressProvider";
import CartHeader from "../../components/CartComponents/CartHeader";
import CartSection from "../../components/CartSection";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Contexts";
import { CartContextValue } from "../../context/ShoppingCartProvider";
import { cartItemType } from "../../models/models";
import ContinueButton from "../../components/CartComponents/ContinueButton";
function Summary() {
  const [userAddress] = useUserAddress();
  const [cart, _] = useContext<CartContextValue | undefined>(
    ShoppingCartContext
  )!;
  let finalPrice = 0;
  cart.map((item) => (finalPrice += item.product!.price * item.quantity));

  function handleOrder(){
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
            {cart && (
              <ul className="flex flex-col">
                {(cart as cartItemType[]).map((item, index) => {
                  return (
                    <li key={index} className="flex flex-row my-2">
                      <img
                        src={item.product?.images[0]}
                        className="w-16 md:w-32 m-2"
                        alt=""
                      />
                      <div className="flex flex-grow justify-between items-center">
                        <div className="flex flex-col">
                          <p className="font-medium">{item.product?.title}</p>
                          <p className="text-gray-400">
                            {item.quantity} x {item.product!.price}$,-
                          </p>
                        </div>
                        <p className="text-gray-500">
                          {item.quantity * item.product!.price}$,-
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            
          </CartSection>
          {cart.length > 0 && (
              <>
                <div className="flex justify-end m-4">
                  <div className="flex flex-col">
                    <p className="font-medium text-lg">
                      Summary: {(finalPrice += 5.39)}$,-
                    </p>
                    <p className="text-gray-400">5.39$ shipping included</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <ContinueButton
                    onClick={handleOrder}
                    text="Order"
                  />
                </div>
              </>
            )}
        </div>
      </div>
    </>
  );
}

export default Summary;
