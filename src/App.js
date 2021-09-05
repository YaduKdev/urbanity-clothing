import Homepage from './Pages/Homepage/Homepage.component';
import ShopPage from './Pages/ShopPage/ShopPage.component';
import SignInSignUpPage from './Pages/SignIn&SignUpPage/SignIn&SignUpPage.component';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header.component';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/user.actions';
import { selectCurrentUser } from './Redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import './App.css';
import React from 'react';
import ContactPage from './Pages/ContactPage/ContactPage.component';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/sign-in' render={()=> this.props.currentUser? (<Redirect to='/' />): (<SignInSignUpPage />) } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
