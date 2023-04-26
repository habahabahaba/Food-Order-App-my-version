import React, { useContext } from 'react';

import { MenuContext } from '../Context/menuContext';

import MenuMeal from './MenuMeal';
import Window from './Window';

export default function MenuWindow() {
  const menu = useContext(MenuContext);
  // console.log(menu);

  return (
    <Window>
      Menu:
      {menu.map((meal) => (
        <MenuMeal key={meal.name} name={meal.name} />
      ))}
    </Window>
  );
}
