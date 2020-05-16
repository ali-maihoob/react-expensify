import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
    <div>
        this is from my dashboard component
        <ExpenseListFilters />
        <ExpensesList />
    </div>
);

export default ExpenseDashBoardPage;