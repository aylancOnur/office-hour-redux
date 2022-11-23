import {combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {configureStore} from '@reduxjs/toolkit';

import {counterReducer, productReducer} from './reducers';

const store = configureStore({
  reducer: combineReducers({counterReducer, productReducer}),
  middleware: [thunk],
});

export default store;
