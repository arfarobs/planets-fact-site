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
    setWidth (state, action) {
      state.width = action.payload;
    },
    toggleHasHadInitialRender (state) {
      state.hasHadInitialRender = !state.hasHadInitialRender;
    }
  }
})

export const { toggleMenuIsOpen, setWidth, toggleHasHadInitialRender } = headerSlice.actions;

export default headerSlice.reducer;