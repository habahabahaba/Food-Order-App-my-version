import React from 'react';
import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { useState } from 'react';

import { CartTotalCountContext } from '../Context/cartContext';

import Button from './Button';
import ItemsCounter from './ItemsCounter';

import classes from './NavigationBar.module.css';

function CartIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className={classes.icon}
    >
      <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
    </svg>
  );
}

export default function NavigationBar(props) {
  const cartTotalCount = useContext(CartTotalCountContext);

  function openCart(event) {
    event.preventDefault();
    cartTotalCount > 0 ? props.openCart() : flashItemsCounter();
  }
  const [flash, setFlash] = useState(false);
  function flashItemsCounter() {
    setFlash(true);
    setTimeout(() => setFlash(false), 500);
    // console.log(flash);
  }
  return ReactDOM.createPortal(
    <div className={classes.bar}>
      <h1>ReactMeals</h1>{' '}
      <Button clickHandler={openCart}>
        <CartIcon />
        Your Cart
        <ItemsCounter flash={flash} />
      </Button>
    </div>,
    document.getElementById('NavigationBar')
  );
}
