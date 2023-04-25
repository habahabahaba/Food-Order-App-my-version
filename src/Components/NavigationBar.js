import React from 'react';

import Button from './Button';
import ItemsCounter from './ItemsCounter';

export default function NavigationBar(props) {
  function openCart(event) {
    event.preventDefault();
    props.openCart();
  }
  return (
    <div style={{ background: 'lightblue' }}>
      <h1>ReactMeals</h1>
      <Button clickHandler={openCart}>
        Your Cart
        <ItemsCounter />
      </Button>
    </div>
  );
}
