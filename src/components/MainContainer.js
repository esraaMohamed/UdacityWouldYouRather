import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Error from './Error'
import AddQuestion from "./AddQuestion";
import ViewQuestion from "./ViewQuestion";
import LeaderBoard from "./LeaderBoard";
import {connect} from "react-redux";
import {handleInitialData} from "../actions/shared";

class MainContainer extends Component {
    render() {
        return this.props.authedUser && this.props.authedUser.user && this.props.users ? (
            <div>
                <Switch>
                    <Route path='/add' exact component={AddQuestion}/>
                    <Route path='/404/' component={Error}/>
                    <Route path='/questions/:id' exact component={ViewQuestion}/>
                    <Route path='/leaderboard' component={LeaderBoard}/>
                    <Route component={Home}/>
                </Switch>
            </div>
        ) : (<Login/>)
    }
}

const mapStateToProps = (state) => {
    return {
        authedUser: state.authedUser,
        users: state.users
    }
};

const mapDispatchToProps = {
    handleInitialData
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);