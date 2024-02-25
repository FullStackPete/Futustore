import { useContext, useEffect, useState } from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import {ShoppingCartContext} from "../context/Contexts";
import { CartContextValue } from "../context/ShoppingCartProvider";
import { ChildrenType, cartItemType } from "../models/models";


function Navbar({ children }: ChildrenType) {
  const [itemsInCart, setItemsInCart] = useState<number>();
  const [cart] = useContext<CartContextValue|undefined>(ShoppingCartContext)!;
  useEffect(() => {
    let cartItemsNumber: number = 0;
    cart.map((item) => (cartItemsNumber += (item as cartItemType).quantity));
    setItemsInCart(cartItemsNumber);
  }, [cart]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#0D0A09] text-white p-2 text-2xl z-10 mb-24 rounded-b-3xl">
        <div className="md:flex md:justify-center md:items-center">
        <div className="flex flex-row justify-between items-center md:w-4/5 lg:w-3/5 ml-4">
          <div className="text-[#31393C] bg-[#FDCA40] p-1 rounded-md ">
            <Link to="/home" className="flex flex-row">
              <Icon className="text-3xl" name="Token"></Icon>
              <p className="ml-2 font-semibold">Futustore</p>
            </Link>
          </div>
          <ul className="flex flex-row">
            <li className="m-4">
              <Link to="/allproducts">
                <Icon className="text-3xl" name="apps" />
              </Link>
            </li>
            <li className="m-4">
              <Link to="/cart">
                <Icon className="text-3xl" name="shopping_cart" />

                {cart.length > 0 && (
                  <div className="w-5 h-5 rounded-full bg-yellow-400 absolute top-2 right-5 md:top-2 md:right-[11.5%] lg:right-[21%]">
                    <div className="text-sm font-semibold text-black flex justify-center items-center">
                      {itemsInCart}
                    </div>
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div>{children}</div>
      
    </>
  );
}
export default Navbar;
