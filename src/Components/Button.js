import React from 'react';

export default function Button(props) {
  const itemCount = '0';
  return (
    <button onClick={props.clickHandler}>
      {/* <svg>
        {' '}
        <path>{props.iconPath}</path>
      </svg>
      {props.label} */}
      {props.children}
      {/* <span>{itemCount}</span> */}
    </button>
  );
}
