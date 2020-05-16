import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import {addExpense} from '../actions/expenses';


const AddExpensePage = (props) => {
    return (
        <div>
            <h1>THis is Add Expense Page</h1>
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                }}
            />
        </div>
    );
};

export default connect()(AddExpensePage);