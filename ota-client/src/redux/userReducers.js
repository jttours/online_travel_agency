import * as actions from './acttionTypes';


const users = [];

export default function userReducer (state = users,action) {
switch (action.type) {
    case actions.USER_REGISTERED:
        return [
            ...state,
            {
                 ...action.payload
            }
        ]
        default:
            return state;
}
}


