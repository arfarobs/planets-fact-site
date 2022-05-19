import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuIsOpen: false
}

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleMenuIsOpen (state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
  }
})

export const { toggleMenuIsOpen, setWidth, toggleHasHadInitialRender } = headerSlice.actions;

export default headerSlice.reducer;