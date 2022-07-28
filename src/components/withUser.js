import React from "react";
import { AppContext } from "./store/AppContext";

function withUser(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <AppContext.Consumer>
          {(value) => {
            return (
              <WrappedComponent
                email={value.user.email}
                isAdmin={value.user.isAdmin}
              />
            );
          }}
        </AppContext.Consumer>
      );
    }
  };
}

export default withUser;
