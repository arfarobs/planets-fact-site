import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../components/info/infoSlice';
import menuSlice from '../components/header/menuSlice';

export const store = configureStore({
	reducer: {
		info: infoReducer,
		menu: menuSlice
	},
});