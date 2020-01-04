import React from 'react'
import { NavLink } from "react-router-dom";
import Home from "./home";
import AddQuestion from "./add-question";
import LeaderBoard from "./leader-board";
import Logout from "./logout";
import UserInfo from "./user-info";

const Nav = () => {
    return (
        <nav className='nav'>
            <h3 className='app-header'> React App</h3>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        <Home/>
                    </NavLink>
                </li>
                <li>
                    {/*to={isAuthenticated ? '/questions/new' : 'asdf'*/}
                    <NavLink to='/questions/new' activeClassName='active'>
                        <AddQuestion/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leader-board' activeClassName='active'>
                        <LeaderBoard/>
                    </NavLink>
                </li>
                <li>
                        <UserInfo />
                </li>
                <li>
                    <NavLink to='/logout' activeClassName='active'>
                        <Logout/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav