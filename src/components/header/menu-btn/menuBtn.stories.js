import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { userEvent, within, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { setMenuIsOpen } from './menuSlice';

import MenuBtn from './MenuBtn';
import './menuBtn.css';


export default {
	title: 'Menu Button',
	component: MenuBtn,
	parameters: {
		viewport: {
			defaultViewport: 'mobile'
		},
	},
	decorators: [
		(Story) => (
			<div style={{
				display: 'flex',
				justifyContent: 'flex-end'
			}}>
				<Story />
			</div>
		),
	],
};

const Story = (args) => 
	<Provider store={store}>
		<MenuBtn {...args} />
	</Provider>;

export const MenuBtnInteractions = Story.bind({});
export const MenuBtnBreakPoints = Story.bind({});

MenuBtnBreakPoints.parameters = {
	chromatic: {
		viewports: [375, 768, 1440]
	}
};

MenuBtnInteractions.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const menuBtn = canvas.getByTestId('menu-btn');
	menuBtn.style.display = 'block';
	store.dispatch(setMenuIsOpen(false));

	await expect(menuBtn).not.toBeVisible();
	await waitFor(async () => {
		await expect(menuBtn).toHaveStyle({opacity: 1});
		await expect(menuBtn).toBeVisible();
	});

	await userEvent.click(menuBtn);
	await waitFor(async () => {
		await expect(menuBtn).toHaveStyle({opacity: 0.25});
	});
	await userEvent.click(menuBtn);
	await waitFor(async () => {
		await expect(menuBtn).toHaveStyle({opacity: 1});
	});
};