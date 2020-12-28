import React, { useState } from "react";
import { Place } from "../Place/Place";
import "./PlacesList.css";

export const PlacesList = ({ ticket, wagons, wagonNumber }) => {
  return (
    <div className="placesList">
      {!!wagons.length &&
        wagons.map((place) => {
          if (wagonNumber === place.WagonNumber) {
            return <Place train={ticket} wagon={wagonNumber} place={place} />;
          }
        })}
    </div>
  );
};
