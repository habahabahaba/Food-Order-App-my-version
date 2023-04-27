import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Window from './Window';
import { Fluff } from '../Config/FLUFF';

export default function FluffWindow() {
  const [fluffText] = useState(Fluff);

  return ReactDOM.createPortal(
    <Window>
      <h1 style={{ background: 'yellow' }}>{fluffText.header}</h1>
      <p style={{ background: 'yellow' }}>{fluffText.body}</p>
    </Window>,
    document.getElementById('FluffWindow')
  );
}
