import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../components/info/infoSlice';

export const store = configureStore({
  reducer: {
    info: infoReducer
  },
});