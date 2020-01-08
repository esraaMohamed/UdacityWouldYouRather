import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Error from './Error'
import AddQuestion from "./AddQuestion";
import ViewQuestion from "./ViewQuestion";
import LeaderBoard from "./LeaderBoard";
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