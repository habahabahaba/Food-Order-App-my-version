import React, { useState } from 'react';

import Window from './Window';
import { Fluff } from '../Config/FLUFF';

export default function FluffWindow() {
  const [fluffText] = useState(Fluff);

  return (
    <Window>
      <h1 style={{ background: 'yellow' }}>{fluffText.header}</h1>
      <p style={{ background: 'yellow' }}>{fluffText.body}</p>
    </Window>
  );
}
