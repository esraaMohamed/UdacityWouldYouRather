import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./login";
import Home from "./home";
import Error from './error'
import AddQuestion from "./add-question";
import ViewQuestion from "./view-question";
import LeaderBoard from "./leader-board";
import {connect} from "react-redux";

class MainContainer extends Component {
    render() {
        return this.props.authedUser && this.props.authedUser.user ? (
            <div>
                <Switch>
                    <Route path='/add' exact component={AddQuestion}/>
                    <Route path='/404/' component={Error}/>
                    <Route path='/questions/:id' exact component={ViewQuestion}/>
                    <Route path='/leaderboard' component={() => <LeaderBoard users={this.props.users}/>}/>
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
export default connect(mapStateToProps)(MainContainer);