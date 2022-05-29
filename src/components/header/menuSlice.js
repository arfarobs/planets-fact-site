import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	menuIsOpen: false
};

export const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		toggleMenuIsOpen (state) {
			state.menuIsOpen = !state.menuIsOpen;
		},
	}
});

export const { toggleMenuIsOpen} = menuSlice.actions;

export default menuSlice.reducer;