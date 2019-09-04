import { UserActionTypes } from './user.types';


// action that holds the value of currentUser
export const setCurrentUser = user => ({
    //what the case expects in reducer
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});