import React, { useContext, useEffect, useRef } from 'react';
import { CartTotalCountContext } from '../Context/cartContext';

export default function ItemsCounter(props) {
  const cartTotalCount = useContext(CartTotalCountContext);

  return <span>{cartTotalCount}</span>;
}
