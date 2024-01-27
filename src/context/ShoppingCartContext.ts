import { createContext } from "react";
import { CartContextValue } from "./ShoppingCartProvider";

const ShoppingCartContext = createContext<CartContextValue|undefined>([[], () => {}]);

export default ShoppingCartContext;