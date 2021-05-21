import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout"; 
import Login from "./Login";
import Signup from "./Signup";
import Orders from "./Orders";
import Prime from "./Prime";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51Hyq4eIb6Q7UHbC8tk690KNOAMTcKStnc3rt7b3ghltLF74IoFvUgt0dn8bKdp2KYmMJLVqZFETiv4HQVToDAdvw00abCPckwB");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once the app component loads..

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
      <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
          <Footer />
        </Route>
        <Route path="/prime">
          <Header />
          <Prime />
          <Footer />
        </Route>
        <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
        </div>
      </Router>   
  );
}

export default App;
