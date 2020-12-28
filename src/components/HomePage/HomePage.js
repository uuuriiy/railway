import React from "react";
//import { LoaderApp } from "../LoaderApp/LoaderApp";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage__titleContainer">
        <h1 className="homePage__title">It is easy to buy train tickets</h1>
        <h3 className="homePage__advertisingTitle">
          Ticket sales for the holiday have been opened
        </h3>
        <div className="homePage__button">
          <NavLink to="/login">
            <Button variant="contained">Login with us</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
