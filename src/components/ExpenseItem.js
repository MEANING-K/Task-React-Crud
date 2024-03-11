import React, { Component } from "react";
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from "react-icons/md";

class ExpenseItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editedCharge: this.props.expense.charge,
            editedAmount: this.props.expense.amount,
            isEditing: false,
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleEditClick = () => {
        this.setState({
            isEditing: true,
        });
    };

    handleSaveClick = () => {
        const { expense } = this.props;
        const { editedCharge, editedAmount } = this.state;

        // 수정된 내용을 ExpenseItem 컴포넌트에서 관리합니다.
        expense.charge = editedCharge;
        expense.amount = editedAmount;

        this.setState({
            isEditing: false,
        });

        // 수정된 내용을 부모 컴포넌트에 전달하여 총지출 값에 반영합니다.
        this.props.onEdit(expense.id, expense);
    };

    render() {
        const { expense, onDelete } = this.props;
        const { editedCharge, editedAmount, isEditing } = this.state;

        return (
            <li className="item">
                <div className="info">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                value={editedCharge}
                                name="editedCharge"
                                onChange={this.handleChange}
                            />
                            <input
                                type="number"
                                value={editedAmount}
                                name="editedAmount"
                                onChange={this.handleChange}
                            />
                        </>
                    ) : (
                        <>
                            <span className="expense">{expense.charge}</span>
                            <span className="amount">{expense.amount}원</span>
                        </>
                    )}
                </div>
                <div>
                    {isEditing ? (
                        <>
                            <button className="save-btn" onClick={this.handleSaveClick}>저장</button>
                            <button className="cancel-btn" onClick={() => this.setState({ isEditing: false })}>취소</button>
                        </>
                    ) : (
                        <>
                            <button className="edit-btn" onClick={this.handleEditClick}>
                                <MdEdit />
                            </button>
                            <button className="clear-btn" onClick={() => onDelete(expense.id)}>
                                <MdDelete />
                            </button>
                        </>
                    )}
                </div>
            </li>
        );
    }
}

export default ExpenseItem;