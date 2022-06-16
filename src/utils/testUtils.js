import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import infoReducer from '../components/info/infoSlice';
import menuReducer from '../components/header/menu-btn/menuSlice';


export const createTestStore = () => {
	const store = configureStore({
		reducer: {
			info: infoReducer,
			menu: menuReducer
		}
	});

	const origDispatch = store.dispatch;
	store.dispatch = jest.fn(origDispatch);
	return store;
};

export const testRender = (component, store) => {
	const history = createMemoryHistory();

	return render(
		<Provider store={store}>
			<Router location={history.location} navigator={history}>
				{component}
			</Router>
		</Provider>
	);
};