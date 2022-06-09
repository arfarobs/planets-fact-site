import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './App';

const history = createMemoryHistory();

//Should I test the functionality of the menu here or elsewhere?
//Should I test animations? It said online not to test animations.
//Should I test useEffect?

test('It should render main.', () => {
	render (
		<Provider store={store}>
			<Router location={history.location} navigator={history}>
				<App />
			</Router>
		</Provider>
	);

	const main = screen.getByRole('main');

	expect(main).toBeInTheDocument();
});