import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage/HomePage";
import { BookTicket } from "./containers/BookTicket/BookTicket";
import { BuyTicket } from "./containers/BuyTicket/BuyTicket";
import { Login } from "./containers/Login/Login";
import { SearchRailways } from "./containers/SearchRailways/SearchRailways";
import { SignUp } from "./containers/SignUp/SignUp";
import { useStateValue } from "./context/StateProvider/StateProvider";
import { auth } from "./firebase/firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "Set_User",
          user: authUser,
        });
      } else {
        dispatch({
          type: "Set_User",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/railwaySearch">
            <SearchRailways />
          </Route>
          <Route path="/buy" component={BuyTicket} />
          <Route path="/book" component={BookTicket} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
