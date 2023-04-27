import React from 'react';
import ReactDOM from 'react-dom';

export default function Background() {
  return ReactDOM.createPortal(
    <div>Background</div>,
    document.getElementById('Background')
  );
}
