import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import App from './views/App';
// import configureStore from './state/configureStore';
// import rootReducer from './state/rootReducer';
// import rootSaga from './state/rootSaga';
import store from './state/modules/dahcoffe/store';
import './assets/libs/tailwind.css';
import './assets/libs/bootstrap.min.css';

// const store = configureStore({}, rootReducer);

// store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
