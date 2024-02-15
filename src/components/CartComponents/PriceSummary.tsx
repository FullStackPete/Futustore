import { useContext } from "react";
import { ShoppingCartContext } from "../../context/Contexts";
import { CartContextValue } from "../../context/ShoppingCartProvider";
import ContinueButton from "./ContinueButton";
import { PriceSummaryProps } from "../../models/models";

function PriceSummary({ handleBtnClick, btnText }: PriceSummaryProps) {
  const [cart, _] = useContext<CartContextValue | undefined>(
    ShoppingCartContext
  )!;
  let finalPrice = 0;
  cart.map((item) => (finalPrice += item.product!.price * item.quantity));
  return (
    <>
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
            <ContinueButton onClick={handleBtnClick} text={btnText} />
          </div>
        </>
      )}
    </>
  );
}

export default PriceSummary;
