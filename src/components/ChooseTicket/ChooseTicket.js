import React, { useState } from "react";
import { PlacesList } from "../PlacesList/PlacesList";
import "./ChooseTicket.css";

export const ChooseTicket = ({ choosenTicket }) => {
  const [number, setNumber] = useState("");
  const {
    TypeOfTrain,
    Сompartment: { Price, Wagons },
  } = choosenTicket;

  console.log(choosenTicket);

  const amountOfFreePlaces = (array) => {
    const element = array.map((el) => {
      let res = 0;
      return el.Places.map((place) => {
        if (place.Status) {
          res++;
        }
        return res;
      });
    });
    return (
      <div className="chooseTicket__AmountOfPlacesContainer">
        {element.map((el) => (
          <div className="chooseTicket__AmountOfPlaces">{el.length}</div>
        ))}
      </div>
    );
  };

  return (
    <div className="chooseTicket__container">
      <div className="chooseTicket">
        <h3 className="chooseTicket__title">Choose Wagon and Place</h3>
        <div className="chooseTicket__typeOfTrainInfo">
          <div>
            <div className="chooseTicket__typeOfTrain">
              {TypeOfTrain} - <span>Branded</span>
            </div>
            <div className="chooseTicket__Price">{Price} UAH</div>
          </div>
          <div className="chooseTicket__Wagons">
            <div className="chooseTicket__Wagon">
              {" "}
              <span> Wagons: </span>{" "}
              {!!Wagons.length &&
                Wagons.map((el) => (
                  <div
                    onClick={() => setNumber(el.WagonNumber)}
                    className="chooseTicket__WagonItem"
                  >
                    {el.WagonNumber}
                  </div>
                ))}{" "}
            </div>
            <div className="chooseTicket__Places">
              {" "}
              <span> Free Places </span> {amountOfFreePlaces(Wagons)}
            </div>
          </div>
        </div>
        <PlacesList
          ticket={choosenTicket}
          wagonNumber={number}
          wagons={Wagons}
        />
      </div>
    </div>
  );
};
