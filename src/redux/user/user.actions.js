
// action that holds the value of currentUser
export const setCurrentUser = user => ({
    //what the case expects in reducer
    type: 'SET_CURRENT_USER',
    payload: user
});