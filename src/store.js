import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { covidDataReducer } from './reducers/covidDataReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        covidData: covidDataReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store