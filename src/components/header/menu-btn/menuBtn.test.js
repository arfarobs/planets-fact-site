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
//Should I test if the img renders?
//Should I test state being dispatched? From What I can gather on the internet, I think it is not necessary to test state being dispatched.

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