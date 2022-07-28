import React from "react";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const appCtx = {
    passPhrase: "123",
    user: {
      email: "jan@kowalski.pl",
      isAdmin: true,
    },
  };

  return <AppContext.Provider value={appCtx}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
