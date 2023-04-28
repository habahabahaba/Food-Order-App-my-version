import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Background.module.css';
import mealsImage from '../IMG/meals.jpg';

export default function Background() {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes['main-image']}>
          <img src={mealsImage} alt='meals' />
        </div>,
        document.getElementById('Background')
      )}
    </React.Fragment>
  );
}
