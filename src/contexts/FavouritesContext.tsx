import React, { createContext, useState } from "react";

//Types

type FavContextProviderProps = {
  children: React.ReactNode;
}
type createContextType = {
  favouriteList: [number] | [];
  setFavouriteList: React.Dispatch<React.SetStateAction<[number] | []>>
}

//CreateContext
export const FavContext = createContext<createContextType | null>(null);

//Provider
export function FavContextProvider({ children }: FavContextProviderProps) {
  const [favouriteList, setFavouriteList] = useState<[number] | []>([]);
  return (
    <FavContext.Provider value={{ favouriteList, setFavouriteList }}>
      {children}
    </FavContext.Provider>
  );
}
