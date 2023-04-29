import React from 'react';
import { useContext } from 'react';
import { CartTotalCountContext } from '../Context/cartContext';

import classes from './ItemsCounter.module.css';

export default React.forwardRef(function ItemsCounter(props, ref) {
  const cartTotalCount = useContext(CartTotalCountContext);

  return (
    <span
      className={
        cartTotalCount > 0 || props.flash
          ? classes.counter
          : classes.counter_inactive
      }
    >
      {cartTotalCount}
    </span>
  );
});
