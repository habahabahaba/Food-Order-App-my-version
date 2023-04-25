import React, { useContext, useState } from 'react';

export default function ItemsCounter(props) {
  const [itemsCount] = useState(0);
  return <span>{itemsCount}</span>;
}
