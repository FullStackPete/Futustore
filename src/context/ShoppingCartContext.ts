import { createContext, Dispatch, SetStateAction } from "react";

type CartContextValue = [object[], Dispatch<SetStateAction<object[]>>];

const ShoppingCartContext = createContext<CartContextValue>([[], () => {}]);

export default ShoppingCartContext;