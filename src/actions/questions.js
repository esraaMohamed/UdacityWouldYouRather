import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
};

export const answerQuestion = (authedUser, qid, answer) => {
    return {
        type: ANSWER_QUESTION,
        qid,
        authedUser,
        answer
    }
};

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
};

export const handleAnswerQuestion = ({ qid, answer}) => {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        const userid = authedUser.user.id;
        dispatch(answerQuestion(userid, qid, answer));
        return _saveQuestionAnswer({authedUser: userid, qid, answer})
            .catch((error) => {
                console.log('Error in handleAnswerQuestion: ', error);
                dispatch(answerQuestion(userid, qid, answer));
                alert('There was an error answering the question, try again.')
            })
    }
};

export const handleAddQuestion = (question) => {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestion(
            question
        )
            .then((question) => dispatch(addQuestion(question)))
            .then(()=> dispatch(hideLoading()))
    }
};

export const handleGetQuestions = () => {
    return (dispatch) => {
        dispatch(showLoading());
        return _getQuestions()
            .then((questions) => dispatch(receiveQuestions(questions)))
            .then(()=> dispatch(hideLoading()))
    }
};
