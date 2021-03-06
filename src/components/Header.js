import React from 'react';
import { NavLink } from 'react-router-dom';

const Header= () => (
    <header>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashbaord</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;