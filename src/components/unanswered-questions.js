import React, {Component} from 'react'
import Questions from "./questions";

class UnansweredQuestions extends Component {

    render() {
        return (
            <Questions questions={this.props.questions} users={this.props.users}/>
        )
    }
}

export default UnansweredQuestions