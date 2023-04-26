import React, { useContext, useEffect } from 'react';

import { CartDispatchContext } from '../Context/cartContext';
import { MenuContext } from '../Context/menuContext';
import { ACTIONS_CART } from '../Context/cartContext';

export default function CartItem(props) {
  const cartDispatch = useContext(CartDispatchContext);
  const menu = useContext(MenuContext);

  function incrementHandle() {
    console.log('incr from CartItem');
    cartDispatch({
      type: 'increment',
      payload: { name: props.name },
    });
  }
  function decrementHandle() {
    console.log('decr from CartItem');
    cartDispatch({
      type: ACTIONS_CART.DECREMENT,
      payload: { name: props.name },
    });
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <p>${menu.find((meal) => meal.name === props.name).price}</p>
      <h3>x{props.quantity}</h3>
      <h3>x{props.state.get(props.name)}</h3>
      <button onClick={decrementHandle}>-</button>
      <button onClick={incrementHandle}>+</button>
    </div>
  );
}
