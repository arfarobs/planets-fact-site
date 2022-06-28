import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';


import PlanetNav from './PlanetNav';
import './planetNav.css';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const history = createMemoryHistory();

export default {
	title: 'Planet Navigation',
	component: PlanetNav,
	decorators: [
		(Story) => (
			<div style={{
				background: '#000'
			}}>
				<Story />
			</div>
		)
	]
};

const Story = (args) =>
	<Router location={history.location} navigator={history} >
		<Provider store={store}>
			<PlanetNav {...args}/>
		</Provider>
	</Router>;

export const FadeInNav = Story.bind({});

FadeInNav.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const nav = canvas.getByRole('navigation');
	const listItems = canvas.getAllByRole('listitem');

	await expect(nav).toBeVisible();
	for await (const listItem of listItems) {
		expect(listItem).not.toBeVisible();
	}
	for (let i = 0; i < listItems.length; i++) {
		setTimeout(async () => {
			await expect(listItems[i]).toBeVisible();
			console.log(listItems[i].style.opacity);
		}, 500 + i * 100 + 300);
	}
};