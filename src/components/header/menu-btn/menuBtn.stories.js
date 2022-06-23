import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';


import MenuBtn from './MenuBtn';
import './menuBtn.css';

export default {
	title: 'Menu Button',
	component: MenuBtn,
	parameters: {
		chromatic: {
			viewports: [375],
			delay: 400
		}
	},
	decorators: [
		(Story) => (
			<div style={{ 
				display: 'flex',
				justifyContent: 'flex-end',
				background: '#000',
				width: '100%'
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

export const FadeInMenuBtn = Story.bind({});
export const ClickMenuBtn = Story.bind({});
export const MenuBtnBreakPoints = Story.bind({});

MenuBtnBreakPoints.parameters = {
	chromatic: {
		viewports: [375, 768, 1440]
	}
};

FadeInMenuBtn.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const menuBtn = canvas.getByTestId('menu-btn');
	menuBtn.style.display = 'block';

	await expect(menuBtn).not.toBeVisible();
	setTimeout(async () => {
		await expect(menuBtn).toBeVisible();
	}, 900);
};

ClickMenuBtn.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const menuBtn = canvas.getByTestId('menu-btn');
	menuBtn.style.display = 'block';

	const opacity = () => {
		return parseFloat(menuBtn.style.opacity);
	};

	await userEvent.click(menuBtn);
	setTimeout(async () => {
		await expect(opacity()).toBe(0.25);
		await userEvent.click(menuBtn);
	}, 1500);
	setTimeout(async () => {
		await expect(opacity()).toBe(1);
	}, 3000);
};

MenuBtnBreakPoints.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const menuBtn = canvas.getByTestId('menu-btn');
	
	if (screen.innerWidth < 768) {
		await expect(menuBtn).toBeVisible();
	} else {
		await expect(menuBtn).not.toBeVisible();
	}
};