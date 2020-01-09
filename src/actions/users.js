export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_QUESTION_ANSWER = 'ADD_USER_QUESTION_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
};

export function addUserQuestion(question) {
    return {
        type: ADD_USER_QUESTION,
        question
    }
}

export function addUserQuestionAnswer(authedUser, qid, answer) {
    return {
        type: ADD_USER_QUESTION_ANSWER,
        qid,
        authedUser,
        answer
    }
}
