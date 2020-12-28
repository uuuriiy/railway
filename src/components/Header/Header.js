import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBG from "../../assets/header-bg.svg";
import logo from "../../assets/logo.svg";
import { useStateValue } from "../../context/StateProvider/StateProvider";
import { auth } from "../../firebase/firebase";
import "./Header.css";

export const Header = () => {
  const [{ user }] = useStateValue();

  // console.log(user);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div style={{ backgroundImage: `url(${HeaderBG})` }} className="header">
      <div className="header__container">
        <div>
          <img className="header__logo" src={logo} alt="logo" />
        </div>
        <NavLink to={!user && `/login`} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">
              {" "}
              Hello {user?.displayName}{" "}
            </span>
            <span className="header__optionLineTwo">
              {" "}
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>
          </div>
        </NavLink>
      </div>
      <div className="header__descriptionContainer">
        <h1 className="header__description">Buy train tickets online</h1>
        <h3 className="header__descriptionUnderTitle">Especially on holiday</h3>
      </div>
    </div>
  );
};
