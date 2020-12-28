import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { db } from "../../firebase/firebase";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import "./BookTicket.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export const BookTicket = () => {
  const [bookingTicket, setBookingTicket] = useState([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    db.collection("BookingTickets").onSnapshot((snapshot) => {
      setBookingTicket(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          bookingTicket: doc.data(),
        }))
      );
    });
  }, []);

  const back = () => {
    history.push("/railwaySearch");
  };

  console.log(bookingTicket);
  return (
    <div>
      <Header />
      <h2 className="bookTicket__title"> Booking Tickets </h2>
      <div className="bookTicket">
        <List className={classes.root}>
          {!!bookingTicket.length &&
            bookingTicket.map(({ id, bookingTicket }) => (
              <ListItem key={id}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={bookingTicket.name}
                  secondary={bookingTicket.surname}
                />
                <ListItemText
                  primary={bookingTicket.wagonNumber}
                  secondary={bookingTicket.choosenPlace}
                />
                <ListItemText primary={bookingTicket.departurePlace} />
                <ListItemText
                  primary={bookingTicket.departureTime}
                  secondary={bookingTicket.departureDate}
                />
                <ListItemText primary={bookingTicket.destinationPlace} />
                <ListItemText
                  primary={bookingTicket.destinationTime}
                  secondary={bookingTicket.destinationDate}
                />
                <ListItemText primary={bookingTicket.price} />
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
