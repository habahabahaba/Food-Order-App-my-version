import React, { useState, createContext } from 'react';
import { MENU } from '../Config/MENU';

export const MenuContext = createContext();

export function MenuContextProvider({ children }) {
  const [menu] = useState(MENU);

  return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
}
