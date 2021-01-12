import { Button, FormControl, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider/StateProvider";
import { auth } from "../../firebase/firebase";
import "./SignUp.css";

export const SignUp = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "Set_User",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "Set_User",
          user: null,
        });
      }
    });
    return () => {
      // Any clear up operations go here
      unsubscribe();
    };
  }, [user, userName]);

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        // addUser(userName, email, password);
        alert(`Successful sign up`);
        history.push("/login");
        return authUser.user.updateProfile({
          displayName: userName,
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="signUp">
      <div className="signUp__logo">
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
      <form className="signUp__form" noValidate autoComplete="off">
        <FormControl>
          <TextField
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="standard-name"
            label="Name"
          />
          <TextField
            className="signUp__email"
            id="standard-email-input"
            type="email"
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="signUp__password"
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={signUp}
            className="signUp__button"
            type="submit"
            variant="contained"
          >
            Sign Up
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
