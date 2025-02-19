import React, { CreateContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Apple", amount: 20 },
    { id: 2, text: "Mango", amount: 50 },
    { id: 3, text: "Banana", amount: 100 },
    { id: 4, text: "Guava", amount: 300 },
  ],
};

export const GlobalContext = CreateContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
