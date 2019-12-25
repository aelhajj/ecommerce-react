import { createSelector } from 'reselect';
// get user from state
const selectUser = state => state.user;

// export current user 
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)