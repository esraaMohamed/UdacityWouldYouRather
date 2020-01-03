import {RECEIVE_QUESTIONS, RECEIVE_ANSWERS, ADD_QUESTION, ANSWER_QUESTION} from "../actions/questions";

const questions = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case RECEIVE_ANSWERS:
            return {
                ...state,
                ...action.answers
            }
        case ANSWER_QUESTION:
            // todo: add code for handling answering a question

        case ADD_QUESTION:
            // todo: handle adding a question
        default:
            return state
    }
}

export default questions