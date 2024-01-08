import React from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";

type DefaultStyle = {
    margin: string;
    children:React.ReactNode;
  };
  
  const ListElement: React.FC<DefaultStyle> = ({ margin, children }) => {
    const defaultStyle: DefaultStyle = {
      margin: margin || "5px",
      children
    };
  
    return <li style={defaultStyle}>{children}</li>;
  };
  
  function Navbar() {
    return (
    <div className="relative top-0 bg-[#31393C] text-white">
      <div className="flex flex-row w-screen justify-center">
        <ul className="flex">
          <ListElement margin="5px">
            <Link to="/home">Home</Link>
          </ListElement>
          <ListElement margin="5px">
            <Link to="/contact">Contact me</Link>
          </ListElement>
          <ListElement margin="5px">
            <Link to="/cart"><Icon className="" name="shopping_cart"/></Link>
          </ListElement>
        </ul>
      </div>
      </div>
    );
  }
  
  export default Navbar;