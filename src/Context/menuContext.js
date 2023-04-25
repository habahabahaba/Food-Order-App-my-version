import React, { useState, createContext } from 'react';
import { MENU } from '../Config/MENU';

export const MenuContext = createContext();

function MenuContextProvider({ children }) {
  return <MenuContext.Provider value={MENU}>{children}</MenuContext.Provider>;
}

export default MenuContextProvider;
