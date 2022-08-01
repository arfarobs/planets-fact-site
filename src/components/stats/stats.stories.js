import { store } from '../../app/store';
import { Provider } from 'react-redux';
import { waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Stats from './Stats';


export default {
	title: 'Stats',
	component: Stats
};

const Story = (args) => 
	<Provider store={store}>
		<Stats {...args} />
	</Provider>;


export const Default = Story.bind({});

Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const statsValues = canvas.getAllByTestId('stats-paragraph');

	await expect(statsValues[0]).not.toBeVisible();
	await expect(statsValues[1]).not.toBeVisible();
	await expect(statsValues[2]).not.toBeVisible();
	await expect(statsValues[3]).not.toBeVisible();

	await waitFor(async () => {
		await expect(statsValues[0]).toBeVisible();
		await expect(statsValues[1]).toBeVisible();
		await expect(statsValues[2]).toBeVisible();
		await expect(statsValues[3]).toBeVisible();
	}, {timeout: 1500});
};