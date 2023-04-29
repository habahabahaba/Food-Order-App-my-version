import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ReactDOM from 'react-dom';

import {
  CartStateContext,
  CartDispatchContext,
  ACTIONS_CART,
} from '../Context/cartContext';
import { MenuContext } from '../Context/menuContext';

// import Button from './Button';
import Window from './Window';
import CartItem from './CartItem';

import classes from './Cart.module.css';

function CartWindow(props) {
  const cartState = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);

  const menu = useContext(MenuContext);

  useEffect(() => {
    cartState.size === 0 && props.closeCart();
  }, [cartState]);

  const cartTotalAmount = Array.from(cartState.entries())
    .reduce(
      (accumulator, currentValue) =>
        accumulator +
        currentValue[1] *
          menu.find((meal) => meal.name === currentValue[0]).price,
      0
    )
    .toFixed(2);

  function placeOrder(event) {
    event.preventDefault();
    cartState.size < 1 // checking for an empty cart
      ? alert(`Please add something to your cart before placing an order.`)
      : alert(`
        Your order (total cost: $${cartTotalAmount}) is on its way. 

        Please feel free to tip your courier. 

      
        Meanwhile, take a look at our loyalty program.`);
    cartDispatch({
      type: ACTIONS_CART.RESET,
    });
    // console.log(cartState);
    // props.closeCart();
  }

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
      <div className={classes.actions}>
        <h1 className={classes.total}>
          Total amount: <span>${cartTotalAmount}</span>
        </h1>
        <button onClick={props.closeCart}>Close</button>
        <button
          className={cartTotalAmount > 0 ? classes.button : null}
          onClick={placeOrder}
        >
          Order
        </button>
      </div>
    </Window>
  );
}

function CartBackdrop(props) {
  return <div className={classes.backdrop} onClick={props.closeCart}></div>;
}

export default function Cart(props) {
  function closeCart(event) {
    event && event.preventDefault();
    props.closeCart();
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <CartBackdrop closeCart={closeCart} />,
        document.getElementById('CartBackdrop')
      )}
      {ReactDOM.createPortal(
        // <CartContextProvider>
        <CartWindow closeCart={closeCart} />,
        // </CartContextProvider>,
        document.getElementById('CartOverlay')
      )}
    </React.Fragment>
  );
}
