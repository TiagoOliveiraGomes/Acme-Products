import React, { createContext, useState } from "react";

//Types

type FavContextProviderProps = {
  children: React.ReactNode;
};

//CreateContext
const FavContext = createContext<object | null>(null);

//Provider
export function FavContextProvider({ children }: FavContextProviderProps) {
  const [favouriteList, setFavouriteList] = useState<[number] | null>(null);
  return (
    <FavContext.Provider value={{ favouriteList, setFavouriteList }}>
      {children}
    </FavContext.Provider>
  );
}
