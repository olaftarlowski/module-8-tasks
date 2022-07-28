import React from "react";
import { withUser } from "./";

const Places = (props) => {
  return (
    <div>
      <h2>places</h2>
      <div>places email: {props.email}</div>
      <div>{props.isAdmin ? "user is an admin" : "user is not an admin"}</div>
    </div>
  );
};

export default withUser(Places);
