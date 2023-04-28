import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ReactDOM from 'react-dom';

import { CartContextProvider, CartStateContext } from '../Context/cartContext';
import { MenuContext } from '../Context/menuContext';

import Button from './Button';
import Window from './Window';
import CartItem from './CartItem';

import classes from './Cart.module.css';

function CartWindow(props) {
  const cartState = useContext(CartStateContext);

  const menu = useContext(MenuContext);

  const cartTotalAmount = Array.from(cartState.entries())
    .reduce(
      (accumulator, currentValue) =>
        accumulator +
        currentValue[1] *
          menu.find((meal) => meal.name === currentValue[0]).price,
      0
    )
    .toFixed(2);

  return (
    <Window className={classes.modal}>
      {Array.from(cartState.entries()).map(([key, value]) => (
        <CartItem
          key={key + Math.random()} // to differ from meals keys
          name={key}
          quantity={value}
          state={cartState}
        />
      ))}
      Cart
      <h1>Total amount: ${cartTotalAmount}</h1>
      <Button clickHandler={props.closeCart}>Close</Button>
      <Button clickHandler={props.placeOrder}>Order</Button>
    </Window>
  );
}

function CartBackdrop(props) {
  return <div className={classes.backdrop} onClick={props.closeCart}></div>;
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
        // <CartContextProvider>
        <CartWindow closeCart={closeCart} placeOrder={placeOrder} />,
        // </CartContextProvider>,
        document.getElementById('CartOverlay')
      )}
    </React.Fragment>
  );
}
