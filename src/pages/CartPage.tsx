import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { CartContextValue } from "../context/ShoppingCartProvider";
import Icon from "../components/Icon";
import { cartItemType } from "../models/models";

function Cart() {
  const [cart, setCart] = useContext<CartContextValue>(ShoppingCartContext);
  function deleteItemFromCart(id: number) {
    const updatedCart = (cart as cartItemType[]).filter(
      (item) => item.product.id !== id
    );
    setCart(updatedCart);
    console.log(cart);
  }

  function updateQuantity(id: number) {
    const quantityInput = document.getElementById(
      "quantityInput"
    ) as HTMLInputElement;
    const productIndex = (cart as cartItemType[]).findIndex(
      (item) => item.product.id === id
    );
    cart[productIndex].quantity = quantityInput.valueAsNumber;
  }

  return (
    <>
      <p className="mt-28 text-2xl ml-4 font-semibold">
        {cart.length > 0 ? "Your cart" : "Your cart is empty!"}
      </p>
      {cart && (
        <ul className=" flex flex-col m-4">
          {(cart as cartItemType[]).map((item, index) => {
            return (
              <li key={index} className="border-y flex flex-row my-2">
                <img
                  src={item.product.images[0]}
                  className="w-20 md:w-64 m-2"
                  alt=""
                />
                <div className="flex flex-row justify-between items-center w-screen md:justify-between">
                  <p className="font-medium">{item.product.title}</p>

                  <input
                    id="quantityInput"
                    type="number"
                    defaultValue={item.quantity}
                    onChange={() => updateQuantity(item.product.id)}
                    className="w-8 h-6 text-center m-4 border border-gray-400 rounded-sm"
                  />

                  <button
                    className="flex"
                    onClick={() => deleteItemFromCart(item.product.id)}
                  >
                    <Icon className="text-red-500" name="delete"></Icon>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Cart;
