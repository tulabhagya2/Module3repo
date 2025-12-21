import React from "react";

import { AppProvider } from "../AppContext"; // context is in src/
import Component2 from "./Component2";

const Component1 = () => {
  return (
    <AppProvider>
      <div>
        <h2>Component1 (Provider)</h2>
        <Component2 />
      </div>
    </AppProvider>
  );
};

export default Component1;
