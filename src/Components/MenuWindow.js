import React, { useContext } from 'react';

import { MenuContext } from '../Context/menuContext';

import MenuMeal from './MenuMeal';
import Window from './Window';

import classes from './MenuWindow.module.css';

export default function MenuWindow() {
  const menu = useContext(MenuContext);

  return (
    <Window className={classes.menu}>
      <ul>
        {menu.map((meal) => (
          <MenuMeal key={meal.name} name={meal.name} />
        ))}
      </ul>
    </Window>
  );
}
