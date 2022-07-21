import { expect } from '@storybook/jest';
import { screen } from '@testing-library/react';
import { createTestStore, testRender } from '../../utils/testUtils';
import '@testing-library/jest-dom';

import Info from './Info';
import { variants } from './Info';

const store = createTestStore();

test('It should render', () => {
	testRender(<Info />, store);

	const sourceLink = screen.getByRole('link');
	const heading = screen.getByRole('heading');

	expect(sourceLink).toBeInTheDocument();
	expect(heading).toBeInTheDocument();
});

test('Variants should return the correct object.', () => {
	const expectedResult1 = {
		opacity: 0.5,
		transition: { delay: 0.6 },
	};
	const expectedResult2 = {
		opacity: 1,
		transition: { delay: 0.8 }
	};

	const actualResult1 = variants.visible(3);
	const actualResult2 = variants.visible(4);

	expect(expectedResult1.opacity).toBeCloseTo(actualResult1.opacity);
	expect(expectedResult1.transition.delay).toBeCloseTo(actualResult1.transition.delay);

	expect(expectedResult2.opacity).toBeCloseTo(actualResult2.opacity);
	expect(expectedResult2.transition.delay).toBeCloseTo(actualResult2.transition.delay);
});
