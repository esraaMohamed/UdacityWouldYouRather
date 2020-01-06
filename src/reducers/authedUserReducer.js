import { SET_AUTHED_USER } from "../actions/authUser";

const initialState = {
    user: null,
};

const authedUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default authedUser