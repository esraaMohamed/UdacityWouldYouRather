import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from "../utils/_DATA";
import {showLoading, hideLoading} from "react-redux-loading";
import {addUserQuestion, addUserQuestionAnswer} from "./users";

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

export function handleAnswerQuestion(qid, selectedOption) {
    return (dispatch, getState) => {
        const authedUser = getState().authedUser.user.id;
        dispatch(showLoading());
        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer: selectedOption
        }).then(() => {
            dispatch(answerQuestion(authedUser, qid, selectedOption));
            dispatch(addUserQuestionAnswer(authedUser, qid, selectedOption));
            dispatch(hideLoading());
        });
    }
}

export const handleAddQuestion = (question) => {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestion(
            question
        )
            .then((question) => {
                dispatch(addQuestion(question));
                dispatch(addUserQuestion(question));
            })
            .then(() => dispatch(hideLoading()))
    }
};

export const handleGetQuestions = () => {
    return (dispatch) => {
        dispatch(showLoading());
        return _getQuestions()
            .then((questions) => dispatch(receiveQuestions(questions)))
            .then(() => dispatch(hideLoading()))
    }
};
