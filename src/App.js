import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './components/sign-in-up/sign-in-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from "./redux/user/user.selector";

// class component so we can have access to state (for auth)
class App extends React.Component {

  // To close subscription of auth :
  unsubscribeFromAuth = null;

  componentDidMount() {
    
    const { setCurrentUser } = this.props;

    //set user as current user when authentification is valid
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        //snapshot allows to check if doc exist, and get data by data method
        userRef.onSnapshot(snapShot => {
          // get data of user in database 
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
      else {
        setCurrentUser(userAuth);
      }
    });
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route 
          exact path='/signin' 
          render= {() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInUp/>)} />
        </Switch>
      </div >
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  // dispatch() whatever object will be passed to reducer
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// we don't need state so we put null
export default connect(mapStateToProps, mapDispatchToProps) (App);
