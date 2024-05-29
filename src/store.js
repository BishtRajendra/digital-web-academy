import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice/index'; // Assuming rootReducer.js is in the same directory

const store = configureStore({
  reducer: rootReducer,
});

export default store;
