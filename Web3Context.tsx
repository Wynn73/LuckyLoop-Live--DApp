
import React, { createContext, useContext } from 'react';
import { Web3ContextType } from './types';

export const Web3Context = createContext<Web3ContextType | null>(null);

export const useWeb3 = (): Web3ContextType => {
  const context = useContext(Web3Context);
  if (!context) throw new Error("Web3Context is undefined");
  return context;
};
