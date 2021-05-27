import axios from 'axios';
import * as actions from './actionTypes';

const serverURL = 'http://localhost:6789';


export const addUser =(user) => {
    return dispatch => {
        // console.log('the user in the action in redux - ',user)
        dispatch(userRegistered());
        
        axios.post(`${serverURL}/register`,{
            user
        })
        .catch (err => {console.log(err)});
    }
}

// export const loginUser = ({userName,userPassword},history) => {
//     console.log('the credentials in the loginUser action are - ',userName,userPassword);
//     return dispatch => {
//         dispatch(loggedInUser(userName,userPassword));

//         axios.post(`${serverURL}/login`,{
//             userName,
//             userPassword
//         })
//         .then((res => window.localStorage.setItem('token', res.data)));
//         history.push("/vacations");
//     }
// }

export const loginUser = (loginState,history) => {
    console.log('the loginState in the loginUser action is - ',loginState)
    return async (dispatch) => {
        try {
            const res = await axios.post(`${serverURL}/login`,{
                loginState
            }
            ,{
                headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
             }
            },
            );
            console.log('the login response is - ', res);
            const { data } = res;
            //window.localStorage.setItem('token', data);
            dispatch({ type: actions.USER_LOGGEDIN, payload: data });
            if (data.user.role === "admin") {
                history.push("/admin");
            } else {
                history.push("/vacations");
            }
            
        } catch (error) {
            console.log('username and password do not match');
        }
    }
}


// export const loginUser = ({userName,userPassword},history) => {
//     return async (dispatch) => {
//         try {
//             const res = await axios.post(`${serverURL}/loginAuth/login`,{
//                 userName,
//                 userPassword
//             });
//             console.log('the login response is - ', res);
//             const { data } = res;
//             window.localStorage.setItem('token', data);
//             dispatch(loggedInUser(userName,userPassword));
//             history.push("/vacations");
//         } catch (error) {
//             console.log('username and password do not match');
//         }
//     }
// }

function userRegistered (user) {
    return {
        type: actions.USER_REGISTERED,
        payload: {
            user
        }
    }
}

function loggedInUser (userName,userPassword) {
    console.log('the credentials in the userLoggedin function - ',userName,userPassword)
    return {
        type: actions.USER_LOGGEDIN,
        payload: {
           userName,
           userPassword
        }
    }
}
