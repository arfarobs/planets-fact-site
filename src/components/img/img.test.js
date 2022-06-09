import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

import Img from './Img';

const history = createMemoryHistory();

/*Should I test the conditional redering here or elsewhere? 
- Should I check if the correct image is being rendered?*/

test('It should render primaryImg. It should not render the secondaryImg.', () => {
	render (
		<Provider store={store}>
			<Router location={history.location} navigator={history}>
				<Img />
			</Router>
		</Provider>
	);

	const primaryImg = screen.getByRole('img');

	expect(primaryImg).toBeInTheDocument();
});