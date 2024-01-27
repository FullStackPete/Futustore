import React, { ReactNode, useContext, useEffect, useState } from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { CartContextValue } from "../context/ShoppingCartProvider";
import { cartItemType } from "../models/models";
type ClassNameProps = {
  className: string;
  children: any;
};

const ListElement: React.FC<ClassNameProps> = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};

type navbarTypes = {
  children: ReactNode;
};

function Navbar({ children }: navbarTypes) {
  const [itemsInCart, setItemsInCart] = useState<number>();
  const [cart] = useContext<CartContextValue|undefined>(ShoppingCartContext)!;
  useEffect(() => {
    let cartItemsNumber: number = 0;
    cart.map((item) => (cartItemsNumber += (item as cartItemType).quantity));
    setItemsInCart(cartItemsNumber);
  }, [cart]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#0D0A09] text-white p-4 text-2xl z-10 mb-24 rounded-b-3xl">
        <div className="flex flex-row justify-between items-center">
          <div className="text-[#31393C] bg-[#FDCA40] p-2 rounded-md">
            <Link to="/home" className="flex flex-row">
              <Icon className="text-3xl" name="Token"></Icon>
              <p className="ml-2 font-semibold">Futustore</p>
            </Link>
          </div>
          <ul className="flex flex-row">
            <ListElement className="m-4">
              <Link to="/allproducts">
                <Icon className="text-3xl" name="apps" />
              </Link>
            </ListElement>
            <ListElement className="m-4">
              <Link to="/cart">
                <Icon className="text-3xl" name="shopping_cart" />

                {cart.length > 0 && (
                  <div className="w-5 h-5 rounded-full bg-yellow-400 absolute top-4 right-9">
                    <div className="text-sm text-black flex justify-center items-center">
                      {itemsInCart}
                    </div>
                  </div>
                )}
              </Link>
            </ListElement>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
export default Navbar;
