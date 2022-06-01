import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../components/info/infoSlice';
import menuSlice from '../components/header/menu-btn/menuSlice';

export const store = configureStore({
	reducer: {
		info: infoReducer,
		menu: menuSlice
	},
});