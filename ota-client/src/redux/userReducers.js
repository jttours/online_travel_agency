import * as actions from './actionTypes';


const users = [];

export default function userReducer (state = users,action) {
switch (action.type) {
    case actions.USER_REGISTERED:
        return [
            ...state,
            {
                 ...action.payload
            }
        ];
        case actions.USER_LOGGEDIN:
            return [
                ...state,
                {
                   username:action.payload.userName,
                   password:action.payload.userPassword
                }
                
            ]
        default:
            return state;
}
}


