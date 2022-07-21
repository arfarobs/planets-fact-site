import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Info from './Info';
import './Info.css';

export default {
	title: 'Info',
	component: Info
};

const Story = (args) => 
	<Provider store={store}>
		<Info {...args} />
	</Provider>;

export const Default = Story.bind({});

Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const heading = canvas.getByRole('heading');
	const paragraph = canvas.getByTestId('paragraph');
	const source = canvas.getByTestId('source');
	const sourceLink = canvas.getByRole('link');

	await expect(heading).not.toBeVisible();
	await expect(paragraph).not.toBeVisible();
	await expect(source).not.toBeVisible();
	await expect(sourceLink).not.toBeVisible();

	await waitFor(async () => {
		await expect(heading).toBeVisible();
		await expect(paragraph).not.toBeVisible();
		await expect(source).not.toBeVisible();
		await expect(sourceLink).not.toBeVisible();
	});

	await waitFor(async () => {
		await expect(paragraph).toBeVisible();
		await expect(source).not.toBeVisible();
		await expect(sourceLink).not.toBeVisible();
	});

	await waitFor(async () => {
		await expect(source).toBeVisible();
		await expect(sourceLink).not.toBeVisible();
	});

	await waitFor(async () => {
		await expect(sourceLink).toBeVisible();
	});
};