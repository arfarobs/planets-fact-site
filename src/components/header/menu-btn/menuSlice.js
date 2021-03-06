import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	menuIsOpen: false,
	menuShouldClose: false,
	menuShouldFadeIn: false,
	mainShouldFadeIn: false
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		toggleMenuIsOpen (state) {
			state.menuIsOpen = !state.menuIsOpen;
		},
		setMenuIsOpen (state, action) {
			state.menuIsOpen = action.payload;
		},
		setMenuShouldClose (state, action) {
			state.menuShouldClose = action.payload;
		},
		setMenuShouldFadeIn (state, action) {
			state.menuShouldFadeIn = action.payload;
		},
		setMainShouldFadeIn (state, action) {
			state.mainShouldFadeIn = action.payload;
		}
	}
});

export const { 
	toggleMenuIsOpen,
	setMenuIsOpen,
	setMenuShouldClose,
	setMenuShouldFadeIn,
	setMainShouldFadeIn
} = menuSlice.actions;

export default menuSlice.reducer;