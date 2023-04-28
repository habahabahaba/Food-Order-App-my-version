import React from 'react';

import classes from './Window.module.css';

export default function Window(props) {
  return (
    <div className={`${classes.window} ${props.className}`}>
      {props.children}
    </div>
  );
}
