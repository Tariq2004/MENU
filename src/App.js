// import {Route} from "react-router-dom"
// import Welcome from "./Welcome";
// import Navigate from "./Components/Navigate";
// import Hello from "./Components/Hello";
// import StripedColumnsExample from "./Components/boots";

// function App() {
//   return (
//     <div>
//       <Navigate />
//       <Route path="/welcome">
//         <Welcome />
//       </Route>
//       <Route path="/helo">
//         <Hello />
//       </Route>
//     {/* <StripedColumnsExample /> */}
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';

import Header from './Layout/Header';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
// import CartProvider from './store/CartProvider';
import CartProvider from "./Store/CartProvider"

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;