import React, { Component } from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

export class ExpenseList extends Component {
    render() {
        const { expenses, onDelete, onEdit, onClear } = this.props;
        return (
            <React.Fragment>
                <ul className="list">
                    {expenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    ))}
                </ul>
                <button className="btn" onClick={onClear}>
                    목록 지우기 <MdDelete className="btn-icon" />
                </button>
            </React.Fragment>
        );
    }
}

export default ExpenseList;
