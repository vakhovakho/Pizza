import React from 'react';
import Home from './Containers/Home/Home';
import Cart from './Containers/Cart/Cart';
import Wrapper from './Components/UI/Wrapper/Wrapper';
import { Switch, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import MyOrder from './Components/MyOrders/MyOrders';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/my-orders" exact component={ MyOrder } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  )
}

export default App;
