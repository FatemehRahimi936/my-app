import React, { useState } from "react";

import { createContext } from "react";

export const productContext = createContext();

const Context = ({ children }) => {
  const [destination, setDestination] = React.useState();
  const [price, setPrice] = React.useState();

  return (
    <productContext.Provider
      value={{ destination, setDestination, price, setPrice }}
    >
      {children}
    </productContext.Provider>
  );
};
export default Context;
