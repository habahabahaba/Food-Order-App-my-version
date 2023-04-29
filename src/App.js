import React, { useState } from 'react';

import { MenuContextProvider } from './Context/menuContext';
import { CartContextProvider } from './Context/cartContext';

import NavigationBar from './Components/NavigationBar';
import MenuWindow from './Components/MenuWindow';
import Cart from './Components/Cart';
import FluffWindow from './Components/FluffWindow';
import Background from './Components/Background';
// import Window from './Components/Window';

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
      <Background />
      <FluffWindow />
      <CartContextProvider>
        <NavigationBar openCart={openCart} />

        <MenuContextProvider>
          {showCart && <Cart closeCart={closeCart} />}
          <MenuWindow />
        </MenuContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
