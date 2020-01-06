import React, { Component } from 'react'
import {Link} from "react-router-dom";

class Error extends Component {
    render() {
        return(
            <div className='center'>
                This question id is invalid, <Link to='/home'>Click here to go back to Home.</Link>
            </div>
        )
    }
}

export default Error