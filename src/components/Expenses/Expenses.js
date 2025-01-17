import React, { useState } from "react";

import ExpenseList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";
import "./Expenses.css";


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        
        <ExpenseChart expenses={filteredExpenses}/>

        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
