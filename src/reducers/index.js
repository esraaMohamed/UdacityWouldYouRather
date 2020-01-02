import { combineReducers } from 'redux'
import authedUser from './authedUserReducer'
import users from './usersReducer'
import questions from './questionsReducer'
import { loadingBarReducer} from "react-redux-loading";

export default combineReducers ({
    authedUser, users, questions, loadingBar: loadingBarReducer
})