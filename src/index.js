import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import burgerBuilderreducer from './store/reducers/burgerBuilder'
import orderReducer from './store/reducers/order'
import authReducer from './store/reducers/auth'
import {createStore,applyMiddleware, compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
const composeEnhancers = process.env.NODE_ENV==='development'?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;
const rootReducer=combineReducers({
    order:orderReducer,
    burgerred:burgerBuilderreducer,
    authred:authReducer
})
const store = createStore(
    rootReducer, /* preloadedState, */
    composeEnhancers(applyMiddleware(thunk))

 );

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
serviceWorker.register();
