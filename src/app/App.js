import './App.css';
import { Header } from '../components/header/Header';
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
import { useDispatch, useSelector } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { setMenuShouldFadeIn, setMainShouldFadeIn } from '../components/header/menu-btn/menuSlice';

function App() {
	const menuIsOpen = useSelector((state) => state.menu.menuIsOpen);
	const mainShouldFadeIn = useSelector((state) => state.menu.mainShouldFadeIn);
	
	const dispatch = useDispatch();
	const location = useLocation();
	const controls = useAnimation();

	const handleMainAnimation = async () => {
		if (menuIsOpen) {
			await controls.start('fadeOut');
			dispatch(setMenuShouldFadeIn(true));
			controls.start('hidePage');
		}
		if (mainShouldFadeIn) {
			await controls.start('displayPage');
			await controls.start('fadeIn');
			dispatch(setMainShouldFadeIn(false));
		}
	};

	useEffect(() => {
		handleMainAnimation();
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
						<Route path="/" element={<Mercury />} />
						<Route path="/venus" element={<Venus />} />
						<Route path="/earth" element={<Earth />} />
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
}

export default App;
