import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import SignUp from './components/SignUp';
import OrderDetails from './components/OrderDetails';

class App extends Component {
  IsValidEmail(value) {
    let emailRegx = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    if (emailRegx.test(value)) {
      return true;
    }
    else {
      return false;
    }
  }
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/signIn" component={Login}/>
                    <Route path="/signUp" component={SignUp}/>
                    <Route path="/order" component={OrderDetails}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
