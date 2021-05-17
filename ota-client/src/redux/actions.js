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

export const loginUser = ({userName,userPassword}) => {
    console.log('the credentials in the loginUser action are - ',userName,userPassword);
    return dispatch => {
        dispatch(loggedInUser(userName,userPassword));

        axios.post(`${serverURL}/login`,{
            userName,
            userPassword
        })
        .then((res => window.localStorage.setItem('token', res.data)));
        //history.push("/vacations");
    }
}


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
