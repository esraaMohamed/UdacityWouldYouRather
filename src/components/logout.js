import React, { Component } from 'react'

class Logout extends Component{
    render() {
        return(
            <div>
                <a href='/' onClick={this.handleClick} >Logout</a>
            </div>
        )
    }
}


export default Logout