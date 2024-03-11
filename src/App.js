import React, { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, charge: "렌트비", amount: 1600 },
        { id: 2, charge: "교통비", amount: 700 },
        { id: 3, charge: "식비", amount: 1200 },
      ],
    };
  }

  handleDelete = (id) => {
    const newExpenses = this.state.expenses.filter(
      (expense) => expense.id !== id
    );
    this.setState({ expenses: newExpenses });
  };

  handleSubmit = (newExpense) => {
    const { expenses } = this.state;
    const newExpenses = [...expenses, { id: expenses.length + 1, ...newExpense }];
    this.setState({ expenses: newExpenses });
  };

  handleClear = () => {
    this.setState({ expenses: [] });
  };

  handleEdit = (id) => {
    // 해당 id의 내용을 수정하는 코드를 작성해야 합니다.
    // 예를 들어, 수정할 내용을 입력 받는 모달 창을 띄우거나,
    // 수정할 내용을 입력하는 폼을 렌더링하여 해당 내용을 업데이트할 수 있습니다.
    console.log("Edit 버튼이 클릭되었습니다. id:", id);
  };

  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{ width: "100%", backgroundColor: "#F5F5F5", padding: "1rem" }}>
          <ExpenseForm onSubmit={this.handleSubmit} />
        </div>
        <div style={{ width: "100%", backgroundColor: "#F5F5F5", padding: "1rem" }}>
          <ExpenseList
            expenses={this.state.expenses}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
            onClear={this.handleClear}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}>
          <p style={{ fontSize: "2rem" }}>
            총지출: <span>원</span>
          </p>
        </div>
      </main>
    );
  }
}

export default App;