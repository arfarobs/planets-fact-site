import { createSlice } from '@reduxjs/toolkit';
import { data } from '../../app/data';

const initialState = {
	currentPage: 'earth',
	currentSection: 'overview',
	paragraph: 'Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth\'s surface is land with remaining 70.8% is covered with water. Earth\'s distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.',
	stats: ['0.99 days', '365.26 days', '6,371 km', '16°c'],
	wikiSrc: 'https://en.wikipedia.org/wiki/Earth',
	paragraphIsChanging: false,
	surfaceStatus: '',
	surfaceHasBeenSelected: false
};

export const infoSlice = createSlice({
	name: 'info',
	initialState,
	reducers: {
		changeCurrentPage(state, action) {
			state.currentPage = action.payload;
			state.paragraph = data[state.currentPage].paragraph.overview;
			state.currentSection = 'overview';
			state.stats = data[state.currentPage].stats;
			state.wikiSrc = data[state.currentPage].wikiSrc;
		},
		changeParagraph(state, action) {
			state.paragraph = data[state.currentPage].paragraph[action.payload];
			state.currentSection = action.payload;
		},
		toggleParagraphIsChanging(state, action) {
			state.paragraphIsChanging = action.payload;
		},
		toggleSurfaceHasBeenSelected(state, action) {
			state.surfaceHasBeenSelected = action.payload;
		},
		setSurfaceStatus(state, action) {
			if (action.payload === 'entering') {
				state.surfaceStatus = action.payload;
			} else if (state.surfaceHasBeenSelected === true) {
				state.surfaceStatus = 'exiting';
			} else {
				state.surfaceStatus = '';
			}
		}
	}
});

export const { 
	changeParagraph, 
	changeCurrentPage, 
	toggleParagraphIsChanging, 
	setSurfaceStatus, 
	toggleSurfaceHasBeenSelected 
} = infoSlice.actions;

export default infoSlice.reducer;