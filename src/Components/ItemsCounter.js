import React, { useContext, useEffect, useRef } from 'react';
import { CartTotalCountContext } from '../Context/cartContext';

import classes from './ItemsCounter.module.css';

export default function ItemsCounter(props) {
  const cartTotalCount = useContext(CartTotalCountContext);

  return (
    <span
      className={
        cartTotalCount > 0 ? classes.counter : classes.counter_inactive
      }
    >
      {cartTotalCount}
    </span>
  );
}
