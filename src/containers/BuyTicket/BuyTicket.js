import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { db } from "../../firebase/firebase";
import "./BuyTicket.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

// cardNumber: "65184392234"
// choosenPlace: 10
// departureDate: "2020-12-28"
// departurePlace: "Lviv"
// departureTime: "9:30:00"
// destinationDate: "2020-12-28"
// destinationPlace: "Kiev"
// destinationTime: "22:30:00 "
// name: "Ura"
// price: 360
// surname: "Ihnatchuk"
// trainNumber: "107"
// typeOfTrain: "Compartment"
// wagonNumber: 5

export const BuyTicket = () => {
  const [buyingTicket, setBuyingTicket] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    db.collection("BuyingTickets").onSnapshot((snapshot) => {
      setBuyingTicket(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          buyingTicket: doc.data(),
        }))
      );
    });
  }, []);

  console.log(buyingTicket);

  const back = () => {
    history.push("/railwaySearch");
  };

  return (
    <div>
      <Header />
      <h2 className="buyTicket__title"> Buying Tickets </h2>
      <div className="buyTicket">
        <List className={classes.root}>
          {!!buyingTicket.length &&
            buyingTicket.map(({ id, buyingTicket }) => (
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={buyingTicket.name}
                  secondary={buyingTicket.surname}
                />
                <ListItemText
                  primary={buyingTicket.wagonNumber}
                  secondary={buyingTicket.choosenPlace}
                />
                <ListItemText primary={buyingTicket.departurePlace} />
                <ListItemText
                  primary={buyingTicket.departureTime}
                  secondary={buyingTicket.departureDate}
                />
                <ListItemText primary={buyingTicket.destinationPlace} />
                <ListItemText
                  primary={buyingTicket.destinationTime}
                  secondary={buyingTicket.destinationDate}
                />
                <ListItemText primary={buyingTicket.price} />
              </ListItem>
            ))}
        </List>
      </div>
      <div className="bookTicket__buttonContainer">
        <Button onClick={back} type="submit" variant="contained">
          Back
        </Button>
      </div>
    </div>
  );
};
