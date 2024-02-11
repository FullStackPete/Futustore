import { useState, useMemo, useEffect, Dispatch, SetStateAction } from 'react';
import { ChildrenType,cartItemType } from '../models/models';
import {ShoppingCartContext} from './Contexts';



export type CartContextValue = [cartItemType[], Dispatch<SetStateAction<cartItemType[]>>];

function CartProvider({ children }: ChildrenType) {
  const storedCartString = localStorage.getItem('esCart');
  const initialCart = storedCartString ? JSON.parse(storedCartString) : [];
  const [cart, setCart] = useState<cartItemType[]>(initialCart);

  const value: CartContextValue = useMemo(() => [cart, setCart], [cart]);

  useEffect(() => {
    localStorage.setItem('esCart', JSON.stringify(cart));
  }, [cart]);

  return (
    <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
  );
}

CartProvider.defaultProps = {
  children: <div>CartProvider</div>,
};

export default CartProvider;
