import React, { Component } from "react";
import "./ExpenseForm.css";
import { MdSend } from "react-icons/md";

export class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charge: "",
            amount: "",
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            charge: "",
            amount: "",
        });
    };

    render() {
        const { charge, amount } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-center">
                    <div className="form-group">
                        <label htmlFor="charge">지출 항목</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="예) 렌트비"
                            id="charge"
                            name="charge"
                            value={charge}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">비용</label>
                        <input
                            type="number"
                            className="form-control"
                            id="amount"
                            name="amount"
                            placeholder="예) 100"
                            value={amount}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className="btn">
                    제출 <MdSend className="btn-icon" />
                </button>
            </form>
        );
    }
}

export default ExpenseForm;
