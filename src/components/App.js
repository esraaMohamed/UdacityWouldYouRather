import React, { Component , Fragment } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoadingBarContainer from "react-redux-loading";
import Nav from "./nav";
import Login from "./login";

class App extends Component {
  render() {
    return (
        <Router>
          <Fragment>
            {/*<LoadingBarContainer/>*/}
            <div className='container'>
              <Nav/>
              {this.props.loading === true ? null
                  : <div>
                    <Route path='/' exact
                           component={Login}/>
                  </div>}
            </div>
          </Fragment>
        </Router>
    )
  }
}
export default App