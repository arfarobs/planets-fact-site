import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

import Paragraph from './Paragraph';
import '../Info.css';
import { waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { toggleParagraphIsChanging } from '../infoSlice';

export default {
	title: 'Paragraph',
	component: Paragraph,
	decorators: [
		(Story) => (
			<div className="info-container">
				<Story />
			</div>
		)
	]
};

const Story = (args) => 
	<Provider store={store}>
		<Paragraph {...args}/>
	</Provider>
;

export const Default = Story.bind({});

Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const paragraph = canvas.getByTestId('paragraph');

	await expect(paragraph).not.toBeVisible();
	await waitFor(async () => {
		await expect(paragraph).toBeVisible();
	});

	await new Promise((r) => setTimeout(r, 500));
	store.dispatch(toggleParagraphIsChanging(true));

	await waitFor(async () => {
		await expect(paragraph).not.toBeVisible();
	});
	await waitFor(async () => {
		await expect(paragraph).toBeVisible();
	});
};