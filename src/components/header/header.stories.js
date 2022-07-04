import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Router } from 'react-router-dom';
import { waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';



import Header from './Header';
import './Header.css';

const history = createMemoryHistory();

export default {
	title: 'Header',
	component: Header,
};

const Story = (args) => 
	<Router location={history.location} navigator={history} >
		<Provider store={store}>
			<Header{...args}/>
		</Provider>
	</Router>;

export const HeaderAnimations = Story.bind({});

HeaderAnimations.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const header = canvas.getByRole('banner');
	const heading = canvas.getByRole('heading');
	header.style.background = '#000';

	await expect(header).toHaveStyle({transform: 'matrix(1, 0, 0, 1, 0, -100)'});
	await expect(heading).toHaveStyle({opacity: 0});

	await waitFor(async () => {
		await expect(header).toHaveStyle({transform: 'none'});
		await expect(heading).toHaveStyle({opacity: 1});
	});
};