import React from "react";
import withUser from "./withUser";

const Places = (props) => {
  return (
    <div>
      <div>{props.email}</div>
      <div>{props.isAdmin}</div>
    </div>
  );
};

export default withUser(Places());
