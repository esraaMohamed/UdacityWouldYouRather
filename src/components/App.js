import React, {Component} from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import Nav from "./Nav";
import MainContainer from "./MainContainer";
import LoadingBarContainer from "react-redux-loading";
import {Row} from "antd";

class App extends Component {
    render() {
        return (
            <Router>
                <Row>
                    <LoadingBarContainer/>
                </Row>
                <div className='container'>
                    <Nav/>
                    {
                        this.props.loading === true ? null
                            : <MainContainer/>
                    }
                </div>
            </Router>
        )
    }
}

export default App