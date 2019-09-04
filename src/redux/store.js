import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//array of middlewares expected by redux 
const middlewares = [ logger ];

// make store, spread all values in middlewares into this function, if we need to
// add things in the middlerware, we can add them into the array middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;


