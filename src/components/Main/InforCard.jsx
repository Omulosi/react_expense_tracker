import React from "react";

const isIncome = Math.round(Math.random());

const InforCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%", fontSize: "0.9rem" }}>
      Try saying:
      <br /> Add {isIncome ? "Income " : "Expense "} for{" "}
      {isIncome ? "$100 " : "$50 "} in Category{" "}
      {isIncome ? "Salary " : "Bills "} for {isIncome ? "Monday " : "Tuesday "}
      ...
    </div>
  );
};

export default InforCard;
