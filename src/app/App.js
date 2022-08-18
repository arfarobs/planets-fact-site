import './App.css';
import './fonts.css';
import Header from '../components/header/Header';
import { Mercury } from '../pages/mercury/Mercury';
import { Venus } from '../pages/venus/Venus';
import { Earth } from '../pages/earth/Earth';
import { Mars } from '../pages/mars/Mars';
import { Jupiter } from '../pages/jupiter/Jupiter';
import { Saturn } from '../pages/saturn/Saturn';
import { Uranus } from '../pages/uranus/Uranus';
import { Neptune } from '../pages/neptune/Neptune';
import { Routes, Route, useLocation } from 'react-router-dom';
import { React, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { setMenuShouldFadeIn, setMainShouldFadeIn } from '../components/header/menu-btn/menuSlice';


import { store } from './store';

export const handleMainAnimation = async (menuIsOpen, mainShouldFadeIn, controls, store) => {

	if (menuIsOpen) {
		await controls.start('fadeOut');
		store.dispatch(setMenuShouldFadeIn(true));
		controls.start('hidePage');
	}
	if (mainShouldFadeIn) {
		await controls.start('displayPage');
		await controls.start('fadeIn');
		store.dispatch(setMainShouldFadeIn(false));
	}
};



const App = () => {
	const menuIsOpen = useSelector((state) => state.menu.menuIsOpen);
	const mainShouldFadeIn = useSelector((state) => state.menu.mainShouldFadeIn);
	
	const location = useLocation();
	const controls = useAnimation();

	useEffect(() => {
		handleMainAnimation(menuIsOpen, mainShouldFadeIn, controls, store);
	}, [menuIsOpen, mainShouldFadeIn]);

	const mainVariants = {
		fadeOut: {
			opacity: 0,
			transition: {
				duration: 0.2
			}
		},
		fadeIn: {
			opacity: 1,
			transition: {
				duration: 0.2,
				delay: 0.2,
			}
		},
		hidePage: {
			display: 'none',
			transition: {
				duration: 0,
				delay: 0.2
			}
		},
		displayPage: {
			display: 'block',
			transition: {
				duration: 0
			}
		}
	};

	return (
		<>
			<Header />
			<motion.main animate={controls} variants={mainVariants}>
				<AnimatePresence exitBeforeEnter>
					<Routes location={location} key={location.key}>
						<Route path="/marcury" element={<Mercury />} />
						<Route path="/venus" element={<Venus />} />
						<Route path="/" element={<Earth />} />
						<Route path="/mars" element={<Mars />} />
						<Route path="/jupiter" element={<Jupiter />} />
						<Route path="/saturn" element={<Saturn />} />
						<Route path="/uranus" element={<Uranus />} />
						<Route path="/neptune" element={<Neptune />} />
					</Routes>
				</AnimatePresence>
			</motion.main>
		</>
	);
};

export default App;
