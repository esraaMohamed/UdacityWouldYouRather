import { _getUsers } from "../utils/_DATA";
import {handleGetQuestions} from "./questions";
import {receiveUsers} from "./users";
import { showLoading, hideLoading } from 'react-redux-loading';

export const handleAllUsers = () => {
    return (dispatch) => {
        dispatch(showLoading());
        return _getUsers().then(users => {
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        })
    }
};

export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading());
        return _getUsers()
            .then(({ users, questions, answers }) => {
                dispatch(receiveUsers(users));
                dispatch(handleGetQuestions());
                dispatch(hideLoading());
            })
    }
};