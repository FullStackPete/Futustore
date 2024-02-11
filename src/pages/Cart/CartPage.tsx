import { useContext } from "react";
import ContinueButton from "../../components/CartComponents/ContinueButton";
import {ShoppingCartContext} from "../../context/Contexts";
import { CartContextValue } from "../../context/ShoppingCartProvider";
import Icon from "../../components/Icon";
import { cartItemType } from "../../models/models";
import QuantityInput from "../../components/QuantityInput";
import { Link, useNavigate } from "react-router-dom";
function Cart() {
  const [cart, setCart] = useContext<CartContextValue | undefined>(
    ShoppingCartContext
  )!;
  const navigate = useNavigate();
  function deleteItemFromCart(id: number) {
    const updatedCart = (cart as cartItemType[]).filter(
      (item) => item.product?.id !== id
    );
    setCart(updatedCart);
    console.log(cart);
  }
  let finalPrice: number = 0;

  const navigateAddress = () => navigate("/cart/address");

  function updateQuantity(id: number, action?: string) {
    const errorOutput = document.getElementById("errorTxt" + id);
    const quantityInput = document.getElementById(
      "quantityInput" + id
    ) as HTMLInputElement;
    errorOutput!.innerHTML = "";
    if (action === "increase") {
      if (quantityInput.valueAsNumber === 10)
        return (errorOutput!.innerHTML = "Only 10 per order.");
      quantityInput.valueAsNumber += 1;
    } else if (action === "decrease") {
      if (quantityInput.valueAsNumber === 1)
        return (errorOutput!.innerHTML = "Number can't be below 1!");
      quantityInput.valueAsNumber -= 1;
    }

    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if ((item as cartItemType).product?.id === id) {
          return {
            ...item,
            quantity: quantityInput.valueAsNumber,
          };
        }
        return item;
      });
      console.log(updatedCart);
      return updatedCart;
    });
  }
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
            {(cart as cartItemType[]).map((item, index) => {
              return (
                <li key={index} className="border-y flex flex-row my-2">
                  <img
                    src={item.product?.images[0]}
                    className="w-20 md:w-64 m-2"
                    alt=""
                  />
                  <div className="flex flex-row justify-between items-center w-screen md:justify-between">
                    <div className="flex flex-col">
                      <p className="font-medium">{item.product?.title}</p>
                      <p className="text-gray-400">
                        {item.product!.price * item.quantity}$,-
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row  border border-black rounded-md m-2">
                        <QuantityInput
                          onChange={() => updateQuantity(item.product?.id || 0)}
                          id={`quantityInput` + item.product?.id || "0"}
                          decreaseNumber={() => {
                            updateQuantity(item.product?.id || 0, "decrease");
                          }}
                          inputValue={item.quantity}
                          increaseNumber={() => {
                            updateQuantity(item.product?.id || 0, "increase");
                          }}
                        />
                      </div>
                      <div
                        id={`errorTxt` + item.product?.id}
                        className=" text-red-500 font-semibold text-center"
                      ></div>
                    </div>
                    <button
                      className="flex"
                      onClick={() => deleteItemFromCart(item.product?.id || 0)}
                    >
                      <Icon className="text-red-500" name="delete"></Icon>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

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
            <div className="flex justify-end mb-4">
              <ContinueButton onClick={navigateAddress} text="Continue" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
