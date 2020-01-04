import React, { Component  } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./nav";
import Login from "./login";
import Home from "./home";
import LeaderBoard from "./leader-board";
import Logout from "./logout";
import Questions from "./questions";
import AddQuestion from "./add-question";
import ViewQuestion from "./view-question";

class App extends Component {
  render() {
    return (
        <Router>
            <div className='container'>
              <Nav/>
              {this.props.loading === true ? null
                  : <div>
                    <Route path='/login' component={Login}/>
                    <Route path='/home' exact component={Home} />
                    <Route path='/questions' component={Questions} />
                    <Route path='/questions/new' component={AddQuestion} />
                    <Route path='/questions/:id' component={ViewQuestion} />
                    <Route path='/leader-board' component={LeaderBoard} />
                    <Route path='/logout' component={Logout} />
                  </div>}
            </div>
        </Router>
    )
  }
}

export default App