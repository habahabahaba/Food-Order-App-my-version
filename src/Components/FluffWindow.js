import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Window from './Window';
import { Fluff } from '../Config/FLUFF';

import classes from './FluffWindow.module.css';

export default function FluffWindow() {
  const [fluffText] = useState(Fluff);

  return ReactDOM.createPortal(
    <Window className={classes.fluff}>
      <h2>{fluffText.header}</h2>
      <p>{fluffText.body}</p>
    </Window>,
    document.getElementById('FluffWindow')
  );
}
