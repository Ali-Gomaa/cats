import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Products from './pages/products';
import Cart from './pages/cart';
import ProductShow from './pages/productShow';
import CartIcon from './components/cartIcon';
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Cat store </a>
            <button className="navbar-toggler" type="button" >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link" href="#">products</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">cart</Link>
                </li>
              </ul>
            </div>
          </div>
          <CartIcon />
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={ProductShow} />
      </div>
    </Router>
  );
}

function AppWithStore() {
  return <Provider store={store}>
    <App />
  </Provider>
}
export default AppWithStore;
