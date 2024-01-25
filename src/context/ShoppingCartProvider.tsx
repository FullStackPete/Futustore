import { useState, useMemo, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';

import ShoppingCartContext from './ShoppingCartContext';

type CartProviderTypes = {
  children: ReactNode;
};

export type CartContextValue = [object[], Dispatch<SetStateAction<object[]>>];

function CartProvider({ children }: CartProviderTypes) {
  const storedCartString = localStorage.getItem('esCart');
  const initialCart = storedCartString ? JSON.parse(storedCartString) : [];
  const [cart, setCart] = useState<object[]>(initialCart);

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
