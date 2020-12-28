import React from "react";
import "./TrainTicketDescription.css";

export const TrainTicketDescription = () => {
  return (
    <div className="trainTicketdescription">
      <div className="trainTicketdescription__ItemLeft">Train</div>
      <div className="trainTicketdescription__ItemRightContainer">
        <div className="trainTicketdescription__ItemRight">
          <div className="trainTicketdescription__ItemRightItem">
            {" "}
            Departure{" "}
          </div>
          <div className="trainTicketdescription__ItemRightItem">
            {" "}
            Destination{" "}
          </div>
          <div className="trainTicketdescription__ItemRightItem">
            {" "}
            Available places{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
