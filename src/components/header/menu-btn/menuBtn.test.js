import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { createTestStore, testRender } from '../../../utils/testUtils';

import MenuBtn from './MenuBtn';
import { expect } from '@storybook/jest';


const store = createTestStore();

test('It should render', () => {
	testRender(<MenuBtn />, store);

	const button = screen.getByRole('button');

	expect(button).toBeInTheDocument();
});

test('It should dispatch the toggleMenuIsOpen action onClick', () => {
	testRender(<MenuBtn />, store);

	const button = screen.getByRole('button');
	userEvent.click(button);

	expect(store.dispatch).toHaveBeenCalledWith({type: 'menu/toggleMenuIsOpen'});
	expect(store.dispatch).toHaveBeenCalledTimes(1);
});