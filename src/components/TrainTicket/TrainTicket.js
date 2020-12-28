import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { ChooseTicket } from "../ChooseTicket/ChooseTicket";
import "./TrainTicket.css";

export const TrainTicket = ({ ticket }) => {
  const [load, setLoad] = useState(false);
  const {
    TrainNumber,
    DeparturePlace,
    DestinationPlace,
    DepartureTime,
    DepartureDate,
    DestinationTime,
    DestinationDate,
    TypeOfTrain,
    Сompartment: { Price, Wagons },
  } = ticket;
  console.log(ticket);
  const amountOfFreePlaces = (array) => {
    let res = 0;
    for (let index = 0; index < array.length; index++) {
      let element = array[index];
      for (let i = 0; i < element.Places.length; i++) {
        const item = element.Places[i];
        if (item.Status) {
          res++;
        }
      }
    }
    console.log(res);
    return <div>{res}</div>;
  };

  return (
    <div className="trainTicket__container">
      <div className="trainTicket__MainInfoContainer">
        <p className="trainTicket__MainInfoTitle"> Electronic ticket </p>
        <div className="trainTicket__MainInfo">
          <div>
            <div className="trainTicket__MainInfoTrainNumber">
              <img
                className="trainTicket__MainInfoTrainLogo"
                src="https://static.tickets.ua/img/gd/provider_logo_ua.jpg?688c2c5023b17d07211f17899177ef8e07b54896"
                alt="ticket logo"
              />
              <div>{TrainNumber}</div>
            </div>
            <div className="trainTicket__MainInfoTrainRoute">
              {" "}
              {DeparturePlace} - {DestinationPlace}
            </div>
          </div>
          <div>
            <div className="trainTicket__MainInfoTrainTime">
              {" "}
              {DepartureTime}{" "}
            </div>
            <div className="trainTicket__MainInfoTrainDate">
              {" "}
              {DepartureDate}{" "}
            </div>
          </div>
          <div>
            <div className="trainTicket__MainInfoTrainTime">
              {" "}
              {DestinationTime}{" "}
            </div>
            <div className="trainTicket__MainInfoTrainDate">
              {" "}
              {DestinationDate}{" "}
            </div>
          </div>
          <div>
            <div className="trainTicket__MainInfoTrainTickets">
              <div className="trainTicket__MainInfoTrainTicketsPrice">
                from {Price} UAH
              </div>
              <div className="trainTicket__MainInfoTrainTicketsTypeOfTrain">
                {TypeOfTrain}
              </div>
              <div className="trainTicket__MainInfoTrainTicketsFreePlaces">
                {amountOfFreePlaces(Wagons)}
              </div>
            </div>
            <div className="trainTicket__button">
              <Button
                onClick={() => setLoad(true)}
                type="submit"
                variant="contained"
              >
                CHOOSE
              </Button>
            </div>
          </div>
        </div>
      </div>
      {load && <ChooseTicket choosenTicket={ticket} />}
    </div>
  );
};
