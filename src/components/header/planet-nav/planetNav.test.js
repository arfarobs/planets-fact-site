import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { store } from '../../../app/store';
import userEvent from '@testing-library/user-event';

import PlanetNav from './PlanetNav';

const history = createMemoryHistory();

//Should I test the changePageColor function?
//Should I change the current tests?
//Should I test conditional attributes?
//SHould I test if the img and span renders?
// How should i test my conditional logic?
// import slice. Set values to what they need to be. Test handle ... animations for each outcome. make sure all of the methods were called.


test('It should render.', () => {
	render(
		<Provider store={store} >
			<Router location={history.location} navigator={history}>
				<PlanetNav />
			</Router>
		</Provider>
	);

	const nav = screen.getByRole('navigation');
	const list = screen.getByRole('list');

	expect(nav).toBeInTheDocument();
	expect(list).toBeInTheDocument();
});

test('It should map the list items correctly.', () => {
	render(
		<Provider store={store} >
			<Router location={history.location} navigator={history}>
				<PlanetNav />
			</Router>
		</Provider>
	);

	const listItems = screen.getAllByRole('listitem');

	expect(listItems.length).toBe(8);
});

test('It should redirect and update history.', () => {
	render(
		<Provider store={store} >
			<Router location={history.location} navigator={history}>
				<PlanetNav />
			</Router>
		</Provider>
	);

	const links = screen.getAllByRole('link');

	userEvent.click(links[0]);
	expect(history.location.pathname).toEqual('/');

	userEvent.click(links[1]);
	expect(history.location.pathname).toEqual('/venus');

	userEvent.click(links[2]);
	expect(history.location.pathname).toEqual('/earth');

	userEvent.click(links[3]);
	expect(history.location.pathname).toEqual('/mars');

	userEvent.click(links[4]);
	expect(history.location.pathname).toEqual('/jupiter');

	userEvent.click(links[5]);
	expect(history.location.pathname).toEqual('/saturn');

	userEvent.click(links[6]);
	expect(history.location.pathname).toEqual('/uranus');

	userEvent.click(links[7]);
	expect(history.location.pathname).toEqual('/neptune');
});