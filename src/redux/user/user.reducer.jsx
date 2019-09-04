// set initial state for first time mount
const INITIAL_STATE = {
    currentUser: null
}
// if state is undefined, it will become INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => { 
    //depending on action type, returns object
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser: action.payload
            }

        default:
            return state;

    }
 };

 export default userReducer;