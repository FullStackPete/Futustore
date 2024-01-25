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
  return (
    <>
      <p className="mt-28 text-2xl ml-4">Your cart</p>
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
                {item.product.title}
                Quantity:{item.quantity}

                <button onClick={() => deleteItemFromCart(item.product.id)}>
                  <Icon className="text-red-500" name="delete"></Icon>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Cart;
