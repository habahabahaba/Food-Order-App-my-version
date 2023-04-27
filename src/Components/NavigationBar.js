import React from 'react';
// import { useContext } from 'react';

import { CartContextProvider } from '../Context/cartContext';

import Button from './Button';
import ItemsCounter from './ItemsCounter';

export default function NavigationBar(props) {
  function openCart(event) {
    event.preventDefault();
    props.openCart();
  }
  return (
    <div style={{ background: 'lightblue' }}>
      <h1>ReactMeals</h1>{' '}
      <Button clickHandler={openCart}>
        Your Cart
        {/* <CartContextProvider> */}
        <ItemsCounter />
        {/* </CartContextProvider> */}
      </Button>{' '}
    </div>
  );
}
