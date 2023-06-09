import React, { createContext, useReducer } from 'react';

import { emptyCart } from '../Config/DUMMY_CART';

const initialCartState = emptyCart;

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();
export const CartTotalCountContext = createContext();

export function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const cartTotalCount = Array.from(cartState.entries())
    .reduce((accumulator, currentValue) => accumulator + currentValue[1], 0)
    .toFixed(0);

  return (
    <CartStateContext.Provider value={cartState}>
      <CartDispatchContext.Provider value={cartDispatch}>
        <CartTotalCountContext.Provider value={cartTotalCount}>
          {children}
        </CartTotalCountContext.Provider>
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

function cartReducer(cartState, action) {
  // console.log('cartReducer recieved:');
  // console.log(action.type);
  // console.log(action.payload.name);
  // console.log(action.payload?.quantity);

  switch (action.type) {
    case 'increment':
      cartState.has(action.payload.name)
        ? cartState.set(
            action.payload.name,
            cartState.get(action.payload.name) + (action.payload.quantity || 1)
          )
        : cartState.set(action.payload.name, action.payload.quantity);
      return new Map([...cartState]);
    case 'decrement':
      cartState.get(action.payload.name) > 1
        ? cartState.set(
            action.payload.name,
            cartState.get(action.payload.name) - 1
          )
        : cartState.delete(action.payload.name);
      return new Map([...cartState]);
    case 'reset':
      // console.log('reset from cartReducer');
      return new Map();

    default:
      throw new Error();
  }
}

export const ACTIONS_CART = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
};
