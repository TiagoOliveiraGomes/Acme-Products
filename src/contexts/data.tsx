import React, { createContext, useState } from "react";

//Types

type ApiDataProviderProps = {
  children: React.ReactNode;
}
type createContextType = {
    verbs: any,
    setVerbs: React.Dispatch<any>,
    adjectives: any,
    setAdjectives: React.Dispatch<any>
}

//CreateContext
export const ApiDataContext = createContext<createContextType | null>(null);

//Provider
export function ApiDataProvider({ children }: ApiDataProviderProps) {
  const [verbs, setVerbs] = useState<any>(null)
  const [adjectives, setAdjectives] = useState<any>(null)

  
  return (
    <ApiDataContext.Provider value={{verbs, setVerbs, adjectives, setAdjectives}}>
      {children}
    </ApiDataContext.Provider>
  );
}
