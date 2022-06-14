import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import App, { handleMainAnimation } from './App';
import { configureStore } from '@reduxjs/toolkit';
import { useAnimation } from 'framer-motion';

const history = createMemoryHistory();
jest.mock('./store');
const mockStore = require('./store');
	
//Check version of JS in IDE
//Why do we import handleMainAnimations?

const mockHandleMainAnimation = jest.fn(menuIsOpen => true, mainShouldFadeIn => false, controls => mockControls, store => mockStore);

//Should I test the functionality of the menu here or elsewhere?
//Should I test animations? It said online not to test animations.
//Should I test useEffect?



