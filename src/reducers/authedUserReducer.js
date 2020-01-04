import {GET_AUTHED_USER, SET_AUTHED_USER} from "../actions/authUser";

const authedUser = (state = null, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id
        case GET_AUTHED_USER:
            return state.authedUser
        default:
            return state
    }
}

export default authedUser