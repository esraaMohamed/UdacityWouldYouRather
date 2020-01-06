import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_ANSWERED_QUESTIONS = 'RECEIVE_ANSWERED_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export const receiveAnsweredQuestions = (question) => {
    return {
        type: RECEIVE_ANSWERED_QUESTIONS,
        question
    }
}

export const answerQuestion = ({id, authedUser, answer}) => {
    return {
        type: ANSWER_QUESTION,
        id,
        authedUser,
        answer
    }
}

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const handleAnswerQuestion = (info) => {
    return (dispatch) => {
        dispatch(answerQuestion(info))
        return _saveQuestionAnswer(info)
            .catch((error) => {
                console.log('Error in handleAnswerQuestion: ', error)
                dispatch(answerQuestion(info))
                alert('There was an error answering the question, try again.')
            })
    }
}

export const handleAddQuestion = (text) => {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        dispatch(showLoading())
        return _saveQuestion({
            text,
            author: authedUser,
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(()=> dispatch(hideLoading()))
    }
}

export const handleGetQuestions = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return _getQuestions()
            .then((questions) => dispatch(receiveQuestions(questions)))
            .then(()=> dispatch(hideLoading()))
    }
}
