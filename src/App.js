import React, { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      totalExpense: 0
    };
  }

  componentDidMount() {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      const totalExpense = storedExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
      this.setState({ expenses: storedExpenses, totalExpense });
    }
  }

  handleDelete = (id) => {
    const newExpenses = this.state.expenses.filter(
      (expense) => expense.id !== id
    );
    const totalExpense = newExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    this.setState({ expenses: newExpenses, totalExpense });
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  handleSubmit = (newExpense) => {
    const { expenses } = this.state;
    const newExpenses = [...expenses, { id: expenses.length + 1, ...newExpense }];
    const totalExpense = newExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    this.setState({ expenses: newExpenses, totalExpense });
    localStorage.setItem('expenses', JSON.stringify(newExpenses));
  };

  handleClear = () => {
    this.setState({ expenses: [], totalExpense: 0 });
    localStorage.removeItem('expenses');
  };

  handleEdit = (id, updatedExpense) => {
    const updatedExpenses = this.state.expenses.map(expense =>
      expense.id === id ? updatedExpense : expense
    );
    const totalExpense = updatedExpenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    this.setState({ expenses: updatedExpenses, totalExpense });
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  render() {
    const { expenses, totalExpense } = this.state;
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{ width: "100%", backgroundColor: "#F5F5F5", padding: "1rem" }}>
          <ExpenseForm onSubmit={this.handleSubmit} />
        </div>
        <div style={{ width: "100%", backgroundColor: "#F5F5F5", padding: "1rem" }}>
          <ExpenseList
            expenses={expenses}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
            onClear={this.handleClear}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}>
          <p style={{ fontSize: "2rem" }}>
            총지출: <span>{totalExpense.toLocaleString()}원</span>
          </p>
        </div>
      </main>
    );
  }
}

export default App;
