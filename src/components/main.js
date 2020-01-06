import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./login";
import Home from "./home";
import AddQuestion from "./add-question";
import ViewQuestion from "./view-question";
import LeaderBoard from "./leader-board";
import {connect} from "react-redux";

class MainContainer extends Component {
    render() {
        return this.props.authedUser && this.props.authedUser.user ? (
            <div>
                <Switch>
                    <Route path='/questions/new' exact component={AddQuestion}/>
                    <Route path='/questions/:id' exact component={ViewQuestion}/>
                    <Route path='/leader-board' component={LeaderBoard}/>
                    <Route component={Home}/>
                </Switch>
            </div>
        ) : (<Login/>)
    }
}

const mapStateToProps = (state) => {
    return {
        authedUser: state.authedUser
    }
};
export default connect(mapStateToProps)(MainContainer);