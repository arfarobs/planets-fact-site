import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../components/info/infoSlice';
import menuReducer from '../components/header/menu-btn/menuSlice';

export const store = configureStore({
	reducer: {
		info: infoReducer,
		menu: menuReducer
	},
});