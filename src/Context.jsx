import React, { createContext } from "react";
import Receiver from "./Receiver";

const FirstName = createContext();

const LastName = createContext();

function Context() {
  return (
    <div>
      <FirstName.Provider value={"Finn"}>
        <LastName.Provider value={"Alen"}>
          <Receiver />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default Context;
export { FirstName, LastName };
