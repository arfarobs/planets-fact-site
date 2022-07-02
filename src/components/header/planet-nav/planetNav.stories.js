import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


import PlanetNav from './PlanetNav';
import './planetNav.css';
import { setMenuShouldClose, setMenuShouldFadeIn, toggleMenuIsOpen } from '../menu-btn/menuSlice';

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
export const MobileNav = Story.bind({});

MobileNav.parameters = {
	viewport: {
		defaultViewport: 'mobile'
	}
};

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
		}, 500 + i * 100 + 300);
	}
};

MobileNav.play = async ({ canvasElement }) => {
	if (window.innerWidth < 768) {
		const canvas = within(canvasElement);
		const nav = canvas.getByTestId('planet-nav');
		const listItems = canvas.getAllByTestId('planet-list-item');

		await expect(nav).not.toBeVisible();

		store.dispatch(toggleMenuIsOpen());
		store.dispatch(setMenuShouldFadeIn(true));

		await waitFor(async () => {
			await expect(nav).toHaveStyle({opacity: 1});
		});
		for await (const listItem of listItems) {
			await expect(listItem).not.toBeVisible();
		}
		for await (const listItem of listItems) {
			await waitFor(async () => {
				await expect(listItem).toBeVisible();
			});
		}

		store.dispatch(setMenuShouldFadeIn(false));
		store.dispatch(setMenuShouldClose(true));
		store.dispatch(toggleMenuIsOpen());

		await waitFor(async () => {
			await expect(nav).toHaveStyle({opacity: 0});
		});
		await waitFor(async () => {
			await expect(nav).toHaveStyle({display: 'none'});
		});
	}
};