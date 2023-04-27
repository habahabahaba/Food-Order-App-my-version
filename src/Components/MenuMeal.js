import React, { useContext, useRef } from 'react';
import { MenuContext } from '../Context/menuContext';
import { CartDispatchContext } from '../Context/cartContext';
import Button from './Button';

export default function MenuMeal(props) {
  const menu = useContext(MenuContext);
  const meal = menu.find((element) => element.name === props.name);
  // console.log(meal);
  const cartDispatch = useContext(CartDispatchContext);

  const quantityRef = useRef(null);

  function incrementHandle(event) {
    event.preventDefault();
    console.log('incr from MenuMeal');
    cartDispatch({
      type: 'increment',
      payload: { name: props.name, quantity: +quantityRef.current.value },
    });
    quantityRef.current.value = 1;
  }

  return (
    <div>
      <div>
        <h2>{props.name}</h2>
        <p>{meal.description}</p>
        <h2>${meal.price}</h2>
      </div>
      <div>
        <input
          type='number'
          min='1'
          step='1'
          defaultValue='1'
          ref={quantityRef}
        />
        <Button clickHandler={incrementHandle}>+Add</Button>
      </div>
    </div>
  );
}
