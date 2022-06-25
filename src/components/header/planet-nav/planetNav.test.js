import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { changePageColor } from './PlanetNav';

import PlanetNav from './PlanetNav';
import { createTestStore, testRender } from '../../../utils/testUtils';
import { expect } from '@storybook/jest';

const history = createMemoryHistory();
const store = createTestStore();

//Should I test the changePageColor function?
//Should I change the current tests?
//Should I test conditional attributes?
//SHould I test if the img and span renders?
// How should i test my conditional logic?
// import slice. Set values to what they need to be. Test handle ... animations for each outcome. make sure all of the methods were called.


test('It should render.', () => {
	testRender(<PlanetNav />, store);

	const nav = screen.getByRole('navigation');
	const list = screen.getByRole('list');

	expect(nav).toBeInTheDocument();
	expect(list).toBeInTheDocument();
});

test('changePageColor should update the color properly.', () => {
	testRender(<PlanetNav />, store);

	const pageColor = () => getComputedStyle(document.documentElement).getPropertyValue('--pageColor');

	changePageColor(0);
	expect(pageColor()).toBe('#419EBB');

	changePageColor(1);
	expect(pageColor()).toBe('#EDA249');

	changePageColor(2);
	expect(pageColor()).toBe('#6D2ED5');

	changePageColor(3);
	expect(pageColor()).toBe('#D14C32');

	changePageColor(4);
	expect(pageColor()).toBe('#D83A34');

	changePageColor(5);
	expect(pageColor()).toBe('#CD5120');

	changePageColor(6);
	expect(pageColor()).toBe('#1EC1A2');

	changePageColor(7);
	expect(pageColor()).toBe('#2D68F0');
});

test('It should redirect and update history. It should update the page color.', () => {
	render(
		<Provider store={store} >
			<Router location={history.location} navigator={history}>
				<PlanetNav />
			</Router>
		</Provider>
	);

	const links = screen.getAllByRole('link');
	const pageColor = () => getComputedStyle(document.documentElement).getPropertyValue('--pageColor');

	userEvent.click(links[0]);
	expect(history.location.pathname).toEqual('/');
	expect(pageColor()).toBe('#419EBB');

	userEvent.click(links[1]);
	expect(history.location.pathname).toEqual('/venus');
	expect(pageColor()).toBe('#EDA249');

	userEvent.click(links[2]);
	expect(history.location.pathname).toEqual('/earth');
	expect(pageColor()).toBe('#6D2ED5');

	userEvent.click(links[3]);
	expect(history.location.pathname).toEqual('/mars');
	expect(pageColor()).toBe('#D14C32');

	userEvent.click(links[4]);
	expect(history.location.pathname).toEqual('/jupiter');
	expect(pageColor()).toBe('#D83A34');

	userEvent.click(links[5]);
	expect(history.location.pathname).toEqual('/saturn');
	expect(pageColor()).toBe('#CD5120');

	userEvent.click(links[6]);
	expect(history.location.pathname).toEqual('/uranus');
	expect(pageColor()).toBe('#1EC1A2');

	userEvent.click(links[7]);
	expect(history.location.pathname).toEqual('/neptune');
	expect(pageColor()).toBe('#2D68F0');
});

test('The list items map correctly.', () => {
	testRender(<PlanetNav />, store);

	const links = screen.getAllByRole('link');
	const icons = screen.getAllByTestId('icon');
	const chevrons = screen.getAllByRole('img', {hidden: true});

	expect(links[0]).toHaveTextContent('mercury');
	expect(links[0]).toHaveAttribute('href', '/');
	expect(icons[0]).toHaveAttribute('id', 'mercury-icon');

	expect(links[1]).toHaveTextContent('venus');
	expect(links[1]).toHaveAttribute('href', '/venus');
	expect(icons[1]).toHaveAttribute('id', 'venus-icon');

	expect(links[2]).toHaveTextContent('earth');
	expect(links[2]).toHaveAttribute('href', '/earth');
	expect(icons[2]).toHaveAttribute('id', 'earth-icon');

	expect(links[3]).toHaveTextContent('mars');
	expect(links[3]).toHaveAttribute('href', '/mars');
	expect(icons[3]).toHaveAttribute('id', 'mars-icon');

	expect(links[4]).toHaveTextContent('jupiter');
	expect(links[4]).toHaveAttribute('href', '/jupiter');
	expect(icons[4]).toHaveAttribute('id', 'jupiter-icon');

	expect(links[5]).toHaveTextContent('saturn');
	expect(links[5]).toHaveAttribute('href', '/saturn');
	expect(icons[5]).toHaveAttribute('id', 'saturn-icon');

	expect(links[6]).toHaveTextContent('uranus');
	expect(links[6]).toHaveAttribute('href', '/uranus');
	expect(icons[6]).toHaveAttribute('id', 'uranus-icon');

	expect(links[7]).toHaveTextContent('neptune');
	expect(links[7]).toHaveAttribute('href', '/neptune');
	expect(icons[7]).toHaveAttribute('id', 'neptune-icon');

	expect(chevrons.length).toBe(8);
	chevrons.forEach(chevron => {
		expect(chevron).toBeInTheDocument();
	});
});