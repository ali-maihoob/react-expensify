import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpensesListItem';


const ExpensesList = (props) => (
    <div>
        <h1>Expenes List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem expense={expense} key={expense.id} />
        })}
    </div>
);

const mapStateToProps = (state)=> {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}
export default connect(mapStateToProps)(ExpensesList);
