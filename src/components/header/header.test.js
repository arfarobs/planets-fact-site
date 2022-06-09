import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

import Header from './header';

const history = createMemoryHistory();

//Have I missed anything?

test('It should render.', () => {
	render (
		<Provider store={store}>
			<Router location={history.location} navigator={history}>
				<Header />
			</Router>
		</Provider>
	);
	
	const header = screen.getByRole('banner');
	const heading = screen.getByRole('heading');

	expect(header).toBeInTheDocument();
	expect(heading).toBeInTheDocument();
});

test('Should redirect and update history.', () => {
	render (
		<Provider store={store}>
			<Router location={history.location} navigator={history}>
				<Header />
			</Router>
		</Provider>
	)

	userEvent.click(screen.getByRole('heading'));

	expect(history.location.pathname).toEqual('/');
});