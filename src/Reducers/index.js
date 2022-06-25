import {combineReducers} from "redux";

import homeReducer from './home.reducers.js';

const rootReducer = combineReducers({
    home: homeReducer,
});

export default rootReducer;
