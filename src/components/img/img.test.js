import { screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { testRender, createTestStore } from '../../utils/testUtils';

import React from 'react';

import Img from './Img';
import { changeParagraph } from '../info/infoSlice';

const store = createTestStore();

test('It should render the primary Img at all times. It should only render the secondary img when the surface section is selected.', async () => {
	testRender(<Img />, store);

	const state = store.getState();
	const primaryAlt = state.info.currentPage;
	const secondaryAlt = `${primaryAlt} geology`;
	const primaryImg = screen.getByAltText(primaryAlt);
	const secondaryImg = screen.queryByAltText(secondaryAlt);

	expect(state.info.currentSection).toBe('overview');
	expect(primaryImg).toBeInTheDocument();
	expect(secondaryImg).toBe(null);

	store.dispatch(changeParagraph('surface'));

	waitFor(async () => {
		expect(secondaryImg).not.toBe(null);
		expect(secondaryImg).toBeInTheDocument();
	});

	store.dispatch(changeParagraph('structure'));

	waitFor(async () => {
		expect(secondaryImg).toBe(null);
	});
});