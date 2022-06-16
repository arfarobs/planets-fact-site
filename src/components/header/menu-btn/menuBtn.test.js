import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../../info/infoSlice';
import menuReducer from './menuSlice';

import MenuBtn from './MenuBtn';

const history = createMemoryHistory();

const store = configureStore({
	reducer: {
		info: infoReducer,
		menu: menuReducer
	}
});
const origDispatch = store.dispatch;
store.dispatch = jest.fn(origDispatch);

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

test('It should dispatch the toggleMenuIsOpen action onClick', () => {
	render(
		<Provider store={store}>
			<Router location={history.location} navigator={history}>
				<MenuBtn />
			</Router>
		</Provider>
	);

	const button = screen.getByRole('button');
	userEvent.click(button);

	expect(store.dispatch).toHaveBeenCalledWith({type: 'menu/toggleMenuIsOpen'});
	expect(store.dispatch).toHaveBeenCalledTimes(1);
});