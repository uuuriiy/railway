import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { TrainTicket } from "../../components/TrainTicket/TrainTicket";
import { TrainTicketDescription } from "../../components/TrainTicketDescription/TrainTicketDescription";
import { db } from "../../firebase/firebase";
import "./SearchRailways.css";

export const SearchRailways = () => {
  const [trains, setTrains] = useState([]);
  const [departurePlace, setDeparturePlace] = useState("");
  const [destinationPlace, setDestinationPlace] = useState("");
  const [start, setStart] = useState("");
  const [loadTicket, setLoadTicket] = useState(false);

  useEffect(() => {
    db.collection("TrainTicket").onSnapshot((snapshot) => {
      setTrains(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          train: doc.data(),
        }))
      );
    });
  }, []);

  //console.log(trains);

  const loadTrain = (e) => {
    e.preventDefault();
    setLoadTicket(true);
  };

  return (
    <div className="searchRailways">
      <Header />
      <form className="searchRailways__formContainer">
        <TextField
          className="searchRailways__formInputMargin"
          id="outlined-name"
          label="Departure place"
          variant="outlined"
          value={departurePlace}
          onChange={(e) => setDeparturePlace(e.target.value)}
        />
        <TextField
          className="searchRailways__formInputMargin"
          id="outlined-name"
          label="Destination place"
          variant="outlined"
          value={destinationPlace}
          onChange={(e) => setDestinationPlace(e.target.value)}
        />
        <TextField
          className="searchRailways__formInputMargin"
          id="outlined-name"
          label="Start"
          type="date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <TextField
          className="searchRailways__formInputMargin"
          id="outlined-name"
          label="End"
          type="date"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <Button
          onClick={loadTrain}
          className="searchRailways__button"
          type="submit"
          variant="contained"
        >
          Search
        </Button>
      </form>
      <div className="searchRailways__ticketContainer">
        {!!loadTicket ? (
          <div>
            <TrainTicketDescription />
            {!!trains.length &&
              trains.map(({ id, train }) => {
                const {
                  DeparturePlace,
                  DestinationPlace,
                  DepartureDate,
                } = train;
                if (
                  DeparturePlace === departurePlace &&
                  DestinationPlace === destinationPlace &&
                  DepartureDate === start
                ) {
                  return (
                    <div key={id}>
                      <TrainTicket ticket={train} />
                    </div>
                  );
                } else {
                  // alert("Fill the Field");
                }
              })}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
