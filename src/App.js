import React from 'react';
import Header from '../src/components/Header'
import ProductsContainer from './containers/ProductsContainer'
import MessageContainer from './containers/MessageContainer'
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
function App() {
  return (
    <div className="App">
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer/>
          <MessageContainer/>
          <CartContainer/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
