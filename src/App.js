import React, { useContext, useState } from 'react';

import MenuContextProvider from './Context/menuContext';

import NavigationBar from './Components/NavigationBar';
import MenuWindow from './Components/MenuWindow';
import CartWindow from './Components/Cart';
import FluffWindow from './Components/FluffWindow';
import Window from './Components/Window';

function App() {
  const [showCart, setShowCart] = useState(false);
  function openCart() {
    setShowCart(true);
  }
  function closeCart() {
    setShowCart(false);
  }

  return (
    <div>
      <NavigationBar openCart={openCart} />
      <FluffWindow />
      <MenuContextProvider>
        {showCart && <CartWindow closeCart={closeCart} />}
        <MenuWindow />
      </MenuContextProvider>
    </div>
  );
}

export default App;
