import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import React from 'react';
import { testRender, createTestStore } from '../../utils/testUtils';


import Header from './header';

const history = createMemoryHistory();
const testStore = createTestStore();

test('It should render.', () => {
	testRender(<Header />, testStore);
	
	const header = screen.getByRole('banner');
	const heading = screen.getByRole('heading');

	expect(header).toBeInTheDocument();
	expect(heading).toBeInTheDocument();
});

test('Should redirect and update history.', () => {
	testRender(<Header />, testStore);

	userEvent.click(screen.getByRole('heading'));

	expect(history.location.pathname).toEqual('/');
});