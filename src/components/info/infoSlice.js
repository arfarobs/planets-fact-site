import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../app/data';

const initialState = {
  currentPage: 'Mercury',
  currentSection: 'overview',
  paragraph: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth."
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
      state.paragraph = data[state.currentPage].paragraph.overview;
    },
    changeParagraph(state, action) {
      state.paragraph = data[state.currentPage].paragraph[action.payload];
      state.currentSection = action.payload;
    }
  }
});

export const { changeParagraph, changeCurrentPage } = infoSlice.actions;

export default infoSlice.reducer;