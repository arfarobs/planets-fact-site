import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import App from './app/App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<MemoryRouter
				initialEntries={['/']}>
				<App />
			</MemoryRouter>
		</Provider>
	</React.StrictMode>
);