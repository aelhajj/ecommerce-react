import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './components/sign-in-up/sign-in-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        //snapshot allows to check if doc exist, and get data by data method
        userRef.onSnapshot(snapShot => {
          // get data of user in database 
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      else {
        this.setState({currentUser: userAuth });
      }
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
