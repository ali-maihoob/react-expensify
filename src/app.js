import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();
store.dispatch(addExpense({ description:'water bill',amount:1200,createdAt:-200 }));
store.dispatch(addExpense({ description:'gas bill',amount:30 ,createdAt:1000}));
store.dispatch(addExpense({ description:'Rent',amount:1700,createdAt:10 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('appRoot'));

