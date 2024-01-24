import Navbar from "../components/Navbar";
import { useState } from "react";


function Cart() {

  const [cartItems, setCartItems] = useState<string[]>();

  return (
    <>
      <Navbar />

      <p className="mt-28 text-2xl ml-4">Your cart</p>
      {cartItems && (
        <div className="flex flex-row">
          {cartItems.map((item) => {
            return <>HI!</>;
          })}
        </div>
      )}
    </>
  );
}

export default Cart;
