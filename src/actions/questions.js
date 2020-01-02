import {_saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import {showLoading, hideLoading} from "react-redux-loading";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export const receiveAnswers = (answers) => {
    return {
        type: RECEIVE_ANSWERS,
        answers
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
            .then((tweet) => dispatch(addQuestion(tweet)))
            .then(()=> dispatch(hideLoading()))
    }
}