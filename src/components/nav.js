import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import Logout from "./logout";
import UserInfo from "./user-info";
import {connect} from "react-redux";

class Nav extends Component {
    render() {
        const {authUser} = this.props;
        return (
            <nav className='nav'>
                <h3 className='app-header'>React App</h3>
                <ul>
                    <li>
                        <NavLink to='/home' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                            Add Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <li>
                        {
                            authUser && <UserInfo/>
                        }
                    </li>
                    <li>
                        {
                            authUser && <Logout/>
                        }
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.authedUser.user
    }
};

export default connect(mapStateToProps)(Nav)