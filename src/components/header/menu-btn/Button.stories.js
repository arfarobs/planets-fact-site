import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

import MenuBtn from './MenuBtn';
import './menuBtn.css';

export default {
	title: 'Menu Button',
	component: MenuBtn,
	parameters: {
		chromatic: {
			viewports: [375, 768, 1440]
		}
	},
	argTypes: {
	}
};

const Story = (args) => 
	<Provider store={store}>
		<MenuBtn {...args} />
	</Provider>;

export const Button = Story.bind({});

Button.args = {

};