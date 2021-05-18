import axios from 'axios';


import * as actions from './actionTypes';


const users = [];

const authState = {
    isLoggedIn: false,
    user: {
      firstName: "",
      lastName: "",
      userName: "",
      role: "",
      jwttoken: "",
    },
  };

  const getAuthState = () => {
    const token = localStorage.getItem("token");
    try {
      const authobj = JSON.parse(token);
      const { expires_at, jwttoken } = authobj.user;
      if (new Date(expires_at) > new Date()) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;
        return authobj;
      }
      return authState;
    } catch (error) {
      return authState;
    }
  };

  const newAuth = getAuthState();



  export default function userReducer (state = users,action) {
    switch (action.type) {
        case actions.USER_REGISTERED:
            const newAuthState = {
                isLoggedIn: true,
                user: action.payload,
              };
              return newAuthState;

        case actions.USER_LOGGEDIN:
            const loginAuthState = {
                isLoggedIn: true,
                user: action.payload,
            };
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${action.payload.jwttoken}`;
            localStorage.setItem("token", JSON.stringify(loginAuthState));
            return loginAuthState;

            case actions.USER_LOGGEDOUT:
                localStorage.removeItem("token");
                return authState;


            default:
                return state;
    }
    }






// export default function userReducer (state = users,action) {
// switch (action.type) {
//     case actions.USER_REGISTERED:
//         return [
//             ...state,
//             {
//                  ...action.payload
//             }
//         ];
//         case actions.USER_LOGGEDIN:
//             return [
//                 ...state,
//                 {
//                    username:action.payload.userName,
//                    password:action.payload.userPassword
//                 }
                
//             ]
//         default:
//             return state;
// }
// }


