import React, { useState } from 'react';
import Home from './Containers/Home/Home';
import Cart from './Containers/Cart/Cart';
import Wrapper from './Components/UI/Wrapper/Wrapper';
import { Switch, Route} from "react-router-dom";
import './App.css';
import MyOrders from './Containers/MyOrders/MyOrders';
import Header from './Components/Header/Header';

function App() {  
  return (
      <Wrapper>
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/my-orders" exact component={ MyOrders } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </Wrapper>
  )
}

export default App;
