import React from "react";
import withUser from "./withUser";

const Movies = (props) => {
  return (
    <div>
      <h2>movies</h2>
      <div>movies email: {props.email}</div>
      <div>{props.isAdmin ? "user is an admin" : "user is not an admin"}</div>
    </div>
  );
};

export default withUser(Movies);
