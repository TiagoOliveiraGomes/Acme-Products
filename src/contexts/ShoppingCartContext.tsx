import React, { createContext, useState } from "react";

//Types

type FavContextProviderProps = {
  children: React.ReactNode;
}
type createContextType = {
    cartList: [number] | [];
  setCartList: React.Dispatch<React.SetStateAction<[number] | []>>
}

//CreateContext
export const CartContext = createContext<createContextType | null>(null);

//Provider
export function CartContextProvider({ children }: FavContextProviderProps) {
  const [cartList, setCartList] = useState<[number] | []>([]);
  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  );
}
