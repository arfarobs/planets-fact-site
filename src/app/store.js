import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../components/info/infoSlice';
import headerSlice from '../components/header/headerSlice';

export const store = configureStore({
  reducer: {
    info: infoReducer,
    header: headerSlice
  },
});