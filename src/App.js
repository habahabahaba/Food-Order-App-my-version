import React, { useContext, useState } from 'react';

import { MenuContextProvider } from './Context/menuContext';
import { CartContextProvider } from './Context/cartContext';

import NavigationBar from './Components/NavigationBar';
import MenuWindow from './Components/MenuWindow';
import Cart from './Components/Cart';
import FluffWindow from './Components/FluffWindow';
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
      <CartContextProvider>
        <NavigationBar openCart={openCart} />
        <FluffWindow />
        <MenuContextProvider>
          {showCart && <Cart closeCart={closeCart} />}
          <MenuWindow />
        </MenuContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
