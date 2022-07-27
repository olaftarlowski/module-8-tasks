import { useContext, useState } from "react";
import { AppContext } from "./store/AppContext";

const withUser = (WrappedComponent) => {
  const someData = {
    email: "jan@kowalski.pl",
    isAdmin: false,
  };

  // const appCtx = useContext(AppContext);
  return <WrappedComponent mail={someData.email} isAdmin={someData.isAdmin} />;
};

export default withUser;
