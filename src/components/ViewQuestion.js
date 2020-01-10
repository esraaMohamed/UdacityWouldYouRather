import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAnswerQuestion} from "../actions/questions";
import AnsweredQuestion from "./AnsweredQuestion";
import UnAnsweredQuestion from "./UnansweredQuestion";

class ViewQuestion extends Component {
    state = {
        question: null,
        author: '',
        isAnswered: false
    };

    componentDidMount() {
        const { authUser} = this.props;
        if (this.props.questions) {
            const {id} = this.props.match.params;
            let author = "";
            let question = "";
            let isAnswered = false;
            if (this.props.questions[id]  && Object.keys(this.props.questions).includes(id)) {
                question = this.props.questions[id];
                author = this.props.users[question.author];
                isAnswered = question.optionOne.votes.includes(authUser.user.id) || question.optionTwo.votes.includes(authUser.user.id)
            }
            this.setState({
                question,
                author,
                isAnswered
            })
        }
    }

    render() {
        const {question, author, isAnswered} = this.state;
        return question && author && isAnswered ? (
            <AnsweredQuestion question={question} user={author}/>
        ) : (
            <UnAnsweredQuestion question={question} author={author}/>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        authUser: state.authedUser,
        users: state.users
    }
};

const mapDispatchToProps = {
    handleAnswerQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewQuestion)