import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user-slice';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

export default rootReducer;
