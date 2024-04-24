import React from "react";
import { FirstName, LastName } from "./Context";

function Receiver() {
  return (
    <div>
      <FirstName.Consumer>
        {(Fname) => {
          return (
            <LastName.Consumer>
              {(Lname) => {
                return (
                  <p>
                    The Client First Name is {Fname} and Last Name is {Lname}
                  </p>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
}

export default Receiver;
