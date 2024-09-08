"use client";
import React, { createContext, useMemo, useContext } from "react";

const GlobalContext = createContext({});

interface GlobalProviderDTO {}

const GlobalProvider = ({ children }: any) => {
  const memoizedContext = (obj: any) => useMemo(() => obj, [obj]);
  const context: GlobalProviderDTO = memoizedContext({});

  const { Provider } = GlobalContext;

  return <Provider value={context}>{children}</Provider>;
};

const useGlobalContext = () => useContext(GlobalContext) as GlobalProviderDTO;

export { GlobalProvider, useGlobalContext };
export type { GlobalProviderDTO };
