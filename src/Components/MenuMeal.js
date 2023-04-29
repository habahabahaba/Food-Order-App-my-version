import React, { useContext, useRef } from 'react';
import { MenuContext } from '../Context/menuContext';
import { CartDispatchContext } from '../Context/cartContext';

import Button from './Button';

import classes from './MenuMeal.module.css';

export default function MenuMeal(props) {
  const menu = useContext(MenuContext);
  const meal = menu.find((element) => element.name === props.name);
  // console.log(meal);
  const cartDispatch = useContext(CartDispatchContext);

  const quantityRef = useRef(null);

  function incrementHandle(event) {
    event.preventDefault();
    // console.log('incr from MenuMeal');
    if (+quantityRef.current.value < 1) return;
    cartDispatch({
      type: 'increment',
      payload: { name: props.name, quantity: +quantityRef.current.value },
    });
    quantityRef.current.value = 1;
  }

  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{meal.description}</p>
        <h3 className={classes.price}>${meal.price}</h3>
      </div>
      <form className={classes.form}>
        <div className={classes.input}>
          <label htmlFor='quantity'>Amount</label>
          <input
            type='number'
            min='1'
            step='1'
            defaultValue='1'
            ref={quantityRef}
            id='quantity'
          />
        </div>
        <Button clickHandler={incrementHandle}>+Add</Button>
      </form>
    </div>
  );
}
