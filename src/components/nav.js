import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className='nav'>
            <h3 className='app-header'> React App</h3>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leader-board' activeClassName='active'>
                        Leader Board
                    </NavLink>
                </li>
                <li>
                        User info and Avatar
                </li>
                <li>
                    <NavLink to='/logout' activeClassName='active'>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav