import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Store from './Store';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
