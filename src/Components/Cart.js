import React from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import Window from './Window';

import { MenuContext } from '../Context/menuContext';
import { dummyCart } from '../Config/DUMMY_CART';
import CartItem from './CartItem';

const initialCartState = dummyCart;

export const ACTIONS_CART = { INCREMENT: 'increment', DECREMENT: 'decrement' };

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
        : cartState.set(action.payload.name, 1);
      return new Map([...cartState]);
    case 'decrement':
      cartState.get(action.payload.name) > 1
        ? cartState.set(
            action.payload.name,
            cartState.get(action.payload.name) - 1
          )
        : cartState.delete(action.payload.name);
      return new Map([...cartState]);
    default:
      throw new Error();
  }
}

function CartWindow(props) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  useEffect(() => console.log(cartState), [cartState]);

  const menu = useContext(MenuContext);
  const totalAmount = Array.from(cartState.entries())
    .reduce(
      (accumulator, currentValue) =>
        accumulator +
        currentValue[1] *
          menu.find((meal) => meal.name === currentValue[0]).price,
      0
    )
    .toFixed(2);
  return (
    <Window>
      {Array.from(cartState.entries()).map(([key, value]) => (
        <CartItem
          key={key + Math.random()} // to differ from meals keys
          name={key}
          quantity={value}
          cartDispatch={cartDispatch}
          state={cartState}
        />
      ))}
      Cart
      <h1>Total amount: ${totalAmount}</h1>
      <Button style={{ background: 'orange' }} clickHandler={props.closeCart}>
        Close
      </Button>
      <Button clickHandler={props.placeOrder}>Order</Button>
    </Window>
  );
}

function CartBackdrop(props) {
  return (
    <div
      style={{ height: '3rem', background: 'darkgrey' }}
      onClick={props.closeCart}
    ></div>
  );
}

export default function Cart(props) {
  function closeCart(event) {
    event.preventDefault();
    props.closeCart();
  }
  function placeOrder(event) {
    event.preventDefault();
    alert(
      'Your order is on the way. Meanwhile, take a look at our loyalty program.'
    );
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <CartBackdrop closeCart={closeCart} />,
        document.getElementById('CartBackdrop')
      )}
      {ReactDOM.createPortal(
        <CartWindow
          style={{ background: 'orange' }}
          closeCart={closeCart}
          placeOrder={placeOrder}
        />,
        document.getElementById('CartOverlay')
      )}
    </React.Fragment>
  );
}
