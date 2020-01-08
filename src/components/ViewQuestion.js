import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Avatar, Button, Card, Col, Divider, Row} from "antd";
import {Link} from "react-router-dom";
import Error from "./Error";
import {handleAnswerQuestion} from "../actions/questions";
import {Redirect} from 'react-router-dom'
import AnsweredQuestion from "./AnsweredQuestion";
import UnAnsweredQuestion from "./UnansweredQuestion";

class ViewQuestion extends Component {
    state = {
        question: null,
        author: '',
        isAnswered: false
    };

    componentDidMount() {
        if (this.props.questions) {
            const {id} = this.props.match.params;
            let author = "";
            let question = "";
            let isAnswered = false;
            if (this.props.questions[id] !== undefined && Object.keys(this.props.questions).includes(id)) {
                question = this.props.questions[id];
                author = this.props.users[question.author];
                isAnswered = !(this.props.questions[id].optionOne.votes.length === 0 || this.props.questions[id].optionTwo.votes.length === 0)
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