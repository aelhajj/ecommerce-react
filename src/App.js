import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './components/sign-in-up/sign-in-up.component';
import {auth} from './firebase/firebase.utils';

// class component so we can have access to state (for auth)
class App extends React.Component {
  constructor () {
    super();
  
    this.state = {
      currentUser: null
    }
  }
  // To close subscription of auth :
  unsubscribeFromAuth = null;

  componentDidMount() {
    
    //set user as current user when authentification is valid
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user });

      console.log(user);
    })
  }

  render() {
    return (
      <div >
        <Header currentUser= {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInUp}/>
        </Switch>
      </div >
    );
  }
}

export default App;
