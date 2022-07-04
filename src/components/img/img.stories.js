import { expect } from '@storybook/jest';
import { waitFor, within } from '@storybook/testing-library';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { changeParagraph, setSurfaceStatus, toggleParagraphIsChanging, toggleSurfaceHasBeenSelected } from '../info/infoSlice';

import Img from './Img';
import './Img.css';

export default {
	title: 'Image Component',
	component: Img,
	decorators: [
		(Story) => (
			<div style={{
				padding: '100px 155px'
			}} >
				<Story />
			</div>
		)
	]
};

const Story = (args) => 
	<Provider store={store}>
		<Img {...args} />
	</Provider>;


export const ImgParagraphChange = Story.bind({});

ImgParagraphChange.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const state = store.getState();
	const primaryAlt = state.info.currentPage;
	const primaryImg = canvas.getByAltText(primaryAlt);
	const secondaryImg = () => canvas.queryByAltText(`${primaryAlt} geology`);
	store.dispatch(changeParagraph('overview'));

	await waitFor(async () => {
		await expect(secondaryImg()).toBe(null);
	});
	await expect(primaryImg).toHaveStyle({transform: 'matrix(0, 0, 0, 0, 0, 0)'});

	await waitFor(async () => {
		await expect(primaryImg).toHaveStyle({transform: 'none'});
	}, { timeout: 2000});

	store.dispatch(toggleParagraphIsChanging(true));
	await waitFor(async () => {
		await expect(primaryImg).toHaveStyle({transform: 'matrix(0, 0, 0, 0, 0, 0)'});
	});

	store.dispatch(changeParagraph('structure'));
	await waitFor(async () => {
		await expect(primaryImg).toHaveStyle({transform: 'none'});
	});

	store.dispatch(toggleParagraphIsChanging(false));
	await new Promise((r) => setTimeout(r, 100));

	store.dispatch(toggleParagraphIsChanging(true));
	store.dispatch(setSurfaceStatus('entering'));
	store.dispatch(toggleSurfaceHasBeenSelected(true));
	await waitFor(async () => {
		await expect(primaryImg).toHaveStyle({transform: 'matrix(0, 0, 0, 0, 0, 0)'});

	});

	store.dispatch(changeParagraph('surface'));

	await waitFor(async () => {
		await expect(secondaryImg()).not.toBe(null);
	});

	await expect(secondaryImg().style.transform).toBe('translateY(100vh) translateZ(0px)');

	await waitFor(async () => {
		await expect(primaryImg).toHaveStyle({ transform: 'none'});
	});

	await waitFor(async () => {
		await expect(secondaryImg().style.transform).toBe('translateY(0vh) translateZ(0px)');
	});
	
	store.dispatch(toggleParagraphIsChanging(false));
	store.dispatch(setSurfaceStatus());
	store.dispatch(toggleParagraphIsChanging(true));
	await waitFor(async () => {
		await expect(primaryImg).toHaveStyle({transform: 'matrix(0, 0, 0, 0, 0, 0)'});
		await expect(secondaryImg().style.transform).toBe('translateY(100vh) translateZ(0px)');
	});

	store.dispatch(changeParagraph('overview'));
	await waitFor(async () => {
		await expect(secondaryImg()).toBe(null);
	});
};