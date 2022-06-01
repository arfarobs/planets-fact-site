import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuIsOpen, setMenuShouldClose, setMainShouldFadeIn, setMenuShouldFadeIn } from '../header/menuSlice';
import chevron from '../../assets/images/icon-chevron.svg';
import { useEffect } from 'react';

export const PlanetNav = () => {
	const dispatch = useDispatch();
	const controls = useAnimation();
	const menuIsOpen = useSelector((state) => state.menu.menuIsOpen);
	const menuShouldClose = useSelector((state) => state.menu.menuShouldClose);
	const menuShouldFadeIn = useSelector((state) => state.menu.menuShouldFadeIn);

	const handleMenuAnimations = async () => {
		if (!menuIsOpen) {
			setTimeout(() => controls.start('visible'), 500);
		}
		if (menuShouldFadeIn && menuIsOpen) {
			await controls.start('mobileHidden');
			await controls.start('openMobileNav');
			await controls.start('openMobileMenu');
			dispatch(setMenuShouldFadeIn(false));
			dispatch(setMenuShouldClose(true));
		} else if (!menuIsOpen && menuShouldClose) {
			dispatch(setMainShouldFadeIn(true));
			await controls.start('fadeOut');
			await controls.start('closeNavMenu');
			dispatch(setMenuShouldClose(false));
		}
	};


	useEffect(() => {
		handleMenuAnimations();
	}, [menuShouldFadeIn, menuIsOpen]);

	const liVariants = {
		visible: i =>  ({
			opacity: 1,
			transition: {
				duration: 0.3,
				delay: i * 0.1,
			}
		}),
		hidden: {
			opacity: 0
		},
		openMobileMenu: i =>  ({
			opacity: 1,
			transition: {
				duration: 0.3,
				delay: i * 0.1,
			}
		}),
		mobileHidden: {
			opacity: 0,
			transition: {
				duration: 0
			}
		}
	};

	const navVariants = {
		openMobileNav: {
			display: 'block',
			opacity: 1,
			transition: {
				from: 0,
				duration: 0.2
			}
		},
		closeNavMenu: {
			display: 'none',
			transition: {
				duration: 0
			}
		},
		fadeOut: {
			opacity: 0,
			transition: {
				duration: 0.2,
			},
			transitionEnd: {
				opacity: 1
			}
		}
	};

	const planetNames = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

	const listItems = planetNames.map((name, index) => {
		return (
			<motion.li key={index} variants={liVariants} custom={index}>

				<Link 
					className="planet-link link" 
					onClick={() => dispatch(toggleMenuIsOpen())}
					to={index === 0 ? '/' : `/${name}`}>

					<motion.span className="planet-link-icon" id={`${name}-icon`}></motion.span>

					{name}

					<img className="chevron" src={chevron} aria-hidden="true" alt=""/>

				</Link>

			</motion.li>
		);
	});

	return (
		<motion.nav id="planet-nav" variants={navVariants} animate={controls} initial='hidden'>
			<ul>
				{listItems}
			</ul>
		</motion.nav>
	);
};