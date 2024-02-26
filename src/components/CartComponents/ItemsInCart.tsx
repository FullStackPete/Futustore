import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Contexts";
import { CartContextValue } from "../../context/ShoppingCartProvider";
import { cartItemType } from "../../models/models";
import Icon from "../Icon";
import QuantityInput from "../QuantityInput";

type ItemsInCart = {
  hasInput: boolean;
  hasDeleteButton: boolean;
  hasFinalPrice: boolean;
  imageClass: string;
  itemsHaveBorder: boolean;
};
function ItemsInCart({
  hasInput,
  hasDeleteButton,
  hasFinalPrice,
  imageClass,
  itemsHaveBorder,
}: ItemsInCart) {
  const [cart, setCart] = useContext<CartContextValue | undefined>(
    ShoppingCartContext
  )!;
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
  function deleteItemFromCart(id: number) {
    const updatedCart = (cart as cartItemType[]).filter(
      (item) => item.product?.id !== id
    );
    setCart(updatedCart);
    console.log(cart);
  }
  return (
    <>
      {(cart as cartItemType[]).map((item, index) => {
        return (
          <li
            key={index}
            className={`${
              itemsHaveBorder ? "border-y" : ""
            } flex flex-row my-2`}
          >
            <img
              src={item.product?.images[0]}
              className={`m-2 ${imageClass}`}
              alt={item.product?.title}
            />
            <div className="flex flex-row justify-between items-center w-screen">
              {/* flex row w screen */}
              <div className="flex flex-col">
                <p className="font-medium">{item.product?.title}</p>
                <p className="text-gray-400">
                  {item.quantity} x {item.product!.price}$,-
                </p>
              </div>
              {hasFinalPrice && (
                <p className="text-gray-500">
                  {item.quantity * item.product!.price}$,-
                </p>
              )}
              {hasInput && hasDeleteButton && (
                <div className="flex flex-row items-center">
                  {hasInput && (
                    <div className="flex flex-col">
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
                      <div
                        id={`errorTxt` + item.product?.id}
                        className=" text-red-500 font-semibold text-center"
                      ></div>
                    </div>
                  )}
                  {hasDeleteButton && (
                    <button
                      className="flex"
                      onClick={() => deleteItemFromCart(item.product?.id || 0)}
                    >
                      <Icon className="text-red-500" name="delete"></Icon>
                    </button>
                  )}
                </div>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
}

export default ItemsInCart;
