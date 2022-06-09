import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import userEvent from '@testing-library/user-event';

import MenuBtn from './MenuBtn';

const history = createMemoryHistory();

/*Should I be testing it on different screen sizes?*/

test('It should render', () => {
	render(
		<Provider store={store}>
			<Router location={history.location} navigator={history}>
				<MenuBtn />
			</Router>
		</Provider>
	);

	const button = screen.getByRole('button');

	expect(button).toBeInTheDocument();
});