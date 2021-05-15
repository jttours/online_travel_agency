import axios from 'axios';
import * as actions from './acttionTypes';

const endPoint = 'http://localhost:6789';


export const addUser =(user) => {
    return dispatch => {
        console.log('the user in the action in redux - ',user)
        dispatch(userRegistered());
        
        axios.post('http://localhost:6789/register',{
            user
        } )
        .catch (err => {console.log(err)});
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




// export function userRegistered (userDetails) {
//     return {
//         type: actions.USER_REGISTERED,
//         payload: {
//             userDetails
//         }
//     }
// }