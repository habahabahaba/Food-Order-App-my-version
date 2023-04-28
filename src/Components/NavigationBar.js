import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';
import ItemsCounter from './ItemsCounter';

import classes from './NavigationBar.module.css';

export default function NavigationBar(props) {
  function openCart(event) {
    event.preventDefault();
    props.openCart();
  }
  return ReactDOM.createPortal(
    <div className={classes.bar}>
      <h1>ReactMeals</h1>{' '}
      <Button clickHandler={openCart}>
        Your Cart
        <ItemsCounter />
      </Button>{' '}
    </div>,
    document.getElementById('NavigationBar')
  );
}
