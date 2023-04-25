import React, { useContext } from 'react';
import { MenuContext } from '../Context/menuContext';

export default function MenuMeal(props) {
  const menu = useContext(MenuContext);
  const meal = menu.find((element) => element.name === props.name);
  console.log(meal);
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{meal.description}</p>
      <h2>${meal.price}</h2>
    </div>
  );
}
