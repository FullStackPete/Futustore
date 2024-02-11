import { createContext } from "react";
import { CartContextValue } from "./ShoppingCartProvider";
import { AddressContextValue } from "./UserAddressProvider";
const ShoppingCartContext = createContext<CartContextValue | undefined>([
  [],
  () => {},
]);
const UserAddressContext = createContext<AddressContextValue | undefined>(
    undefined
  );
export { ShoppingCartContext, UserAddressContext };
