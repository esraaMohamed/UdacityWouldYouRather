import React, {Component} from 'react'
import Answered from "./Answered";

class AnsweredQuestions extends Component {

    render() {
        return (
            <Answered questions={this.props.questions} users={this.props.users}/>
        )
    }
}

export default AnsweredQuestions