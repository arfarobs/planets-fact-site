import { createTestStore, testRender } from '../../utils/testUtils.js';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import Stats from './Stats';

const store = createTestStore();

test('It renders the component', () => {
	testRender(<Stats />, store);

	const list = screen.getByRole('list');

	expect(list).toBeInTheDocument();
});

test('The list items map function works as expected.', () => {
	testRender(<Stats />, store);

	const [rotationHeading, revolutionHeading, radiusHeading, averageHeading] = screen.getAllByRole('heading');

	expect(rotationHeading).toHaveTextContent('rotation time');
	expect(revolutionHeading).toHaveTextContent('revolution time');
	expect(radiusHeading).toHaveTextContent('radius');
	expect(averageHeading).toHaveTextContent('average temp');
});