import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux";
import thunk from "redux-thunk";

/* reducer and types from  one part */

import {
  covidReducer,
  initialCovidState,
} from "./components/Content/reduxContent/reducer";
import { ICovidState } from "./components/Content/reduxContent/types";

/* interface for entire application */

export interface IApplicationState extends ICovidState {}

const initialState: IApplicationState = {
  covidData: initialCovidState,
};

const rootReducer = combineReducers<IApplicationState>({
  covidData: covidReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<IApplicationState> = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

/* old store just for javascript for store.js
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
*/
