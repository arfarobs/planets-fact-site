import { screen } from '@testing-library/react';
import { createTestStore, testRender } from '../../utils/testUtils';
import '@testing-library/jest-dom';

import InfoNav from './InfoNav';
import { expect } from '@storybook/jest';

const store = createTestStore();

test ('It renders the component', () => {
	testRender(<InfoNav />, store);

	const listItems = screen.getAllByRole('listitem');

	listItems.forEach(listItem => expect(listItem).toBeInTheDocument);
});

test('It maps the list items correctly', () => {
	testRender(<InfoNav />, store);

	const buttons = screen.getAllByRole('button');
	const numbers = screen.getAllByTestId('info-nav-number');
	const headings = screen.getAllByRole('heading');

	expect(buttons[0]).toHaveAttribute('class', 'info-nav-button selected-info-nav-button');
	expect(buttons[1]).toHaveAttribute('class', 'info-nav-button non-selected-nav-button');
	expect(buttons[2]).toHaveAttribute('class', 'info-nav-button non-selected-nav-button');

	expect(numbers[0]).toHaveTextContent('01');
	expect(numbers[1]).toHaveTextContent('02');
	expect(numbers[2]).toHaveTextContent('03');

	expect(headings[0]).toHaveTextContent('overview');
	expect(headings[1]).toHaveTextContent('internal structure');
	expect(headings[2]).toHaveTextContent('surface geology');

});