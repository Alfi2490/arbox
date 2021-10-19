import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import gymPageReducer from './gymPageReducer';
import userPageReducer from './userPageReducer';

const rootReducer = combineReducers({
    gym: gymPageReducer,
    user: userPageReducer
});

const store = configureStore({reducer: rootReducer});

export default store;