import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../app/store';

import MenuBtn from '../components/header/menu-btn/MenuBtn';


export default {
	title: 'Menu Button',
	component: MenuBtn,
	argTypes: {
		backgroundColor: { control: 'color' }
	}
};

const Story = (args) => 
	<Provider store={store}>
		<MenuBtn {...args} />
	</Provider>;

export const ClosedMenuBtn = Story.bind({});
export const OpenedMenuBtn = Story.bind({});



ClosedMenuBtn.args = {

};

OpenedMenuBtn.args = {

};