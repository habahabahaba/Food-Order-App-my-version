import React, { useContext } from 'react';

import { CartStateContext, CartDispatchContext } from '../Context/cartContext';
import { MenuContext } from '../Context/menuContext';
import { ACTIONS_CART } from '../Context/cartContext';

import classes from './CartItem.module.css';

export default function CartItem(props) {
  const cartDispatch = useContext(CartDispatchContext);
  const menu = useContext(MenuContext);

  function incrementHandle() {
    // console.log('incr from CartItem');
    cartDispatch({
      type: 'increment',
      payload: { name: props.name },
    });
  }
  function decrementHandle() {
    // console.log('decr from CartItem');
    cartDispatch({
      type: ACTIONS_CART.DECREMENT,
      payload: { name: props.name },
    });
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        {' '}
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <p className={classes.price}>
            ${menu.find((meal) => meal.name === props.name).price}
          </p>
          <span className={classes.amount}>x{props.quantity}</span>
          {/* <h3  className={classes.amount}>x{cartState.get(props.name)}</h3> */}
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={incrementHandle}> + </button>
        <button onClick={decrementHandle}> - </button>
      </div>
    </li>
  );
}
