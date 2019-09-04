import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './redux/store';

ReactDOM.render(
    // provider is component that gives context of store to the rest of the app
    <Provider store= { store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
 
    document.getElementById('root')
);


