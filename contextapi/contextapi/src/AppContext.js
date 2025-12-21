import React, { createContext } from "react";

// Create context
export const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const values = {
    a: "Value A",
    b: "Value B",
    c: "Value C",
    d: "Value D",
    e: "Value E",
    f: "Value F",
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};
