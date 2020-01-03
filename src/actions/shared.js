import { _getUsers } from "../utils/_DATA";
import {receiveAnswers, receiveQuestions} from "./questions";
import {receiveUsers} from "./users";
import {setAuthedUser} from "./authUser";
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID  = 'tylermcginnis'

export const handleAllUsers = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return _getUsers().then(users => {
            dispatch(receiveUsers(users))
            dispatch(hideLoading())
        })
    }
}

export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return _getUsers()
            .then(({ users, questions, answers }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(receiveAnswers(answers))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}