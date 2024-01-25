import React, { ReactNode } from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";
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
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#0D0A09] text-white p-4 text-2xl z-10 mb-24 rounded-b-3xl">
        <div className="flex flex-row justify-between items-center">
          <div className="text-[#31393C] bg-[#FDCA40] p-2 rounded-md">
            <Link to="/home" className="flex flex-row">
              <Icon className="text-3xl" name="Token"></Icon>
              <p className="ml-2">Futustore</p>
            </Link>
          </div>
          <ul className="flex flex-row">
            <ListElement className="m-4">
              <Link to="/contact">
                <Icon className="text-3xl" name="phone" />
              </Link>
            </ListElement>
            <ListElement className="m-4">
              <Link to="/cart">
                <Icon className="text-3xl" name="shopping_cart" />
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
