import React, { useReducer, createContext } from "react";
import contexReducer from "./contextReducer";

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contexReducer, initialState);

  // Action creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  return (
    <ExpenseTrackerContext.Provider
      value={{
        appName: "Expense Tracker",
        deleteTransaction,
        addTransaction,
        transactions,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
