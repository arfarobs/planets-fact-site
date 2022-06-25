import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuShouldClose, setMainShouldFadeIn, setMenuShouldFadeIn, setMenuIsOpen } from '../menu-btn/menuSlice';
import chevron from '../../../assets/images/icon-chevron.svg';
import { useEffect } from 'react';
import './planetNav.css';
import { changeCurrentPage } from '../../info/infoSlice';

export const changePageColor = (index) => {
	const pageColors = ['#419EBB', '#EDA249', '#6D2ED5', '#D14C32', '#D83A34', '#CD5120', '#1EC1A2', '#2D68F0'];
	document.documentElement.style.setProperty('--pageColor', pageColors[index]);
};

const PlanetNav = () => {
	const menuIsOpen = useSelector((state) => state.menu.menuIsOpen);
	const menuShouldClose = useSelector((state) => state.menu.menuShouldClose);
	const menuShouldFadeIn = useSelector((state) => state.menu.menuShouldFadeIn);

	const dispatch = useDispatch();
	const controls = useAnimation();

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
		}
		if (!menuIsOpen && menuShouldClose) {
			dispatch(setMainShouldFadeIn(true));
			await controls.start('fadeOut');
			await controls.start('closeNavMenu');
			dispatch(setMenuShouldClose(false));
		}
	};


	useEffect(() => {
		handleMenuAnimations();
	}, [menuShouldFadeIn, menuIsOpen]);

	const liAnimate = i => ({
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: i * 0.1,
		}
	});

	const liVariants = {
		visible: liAnimate,
		hidden: { opacity: 0 },
		openMobileMenu: liAnimate,
		mobileHidden: {
			opacity: 0,
			transition: { duration: 0 }
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
			transition: { duration: 0 }
		},
		fadeOut: {
			opacity: 0,
			transition: { duration: 0.2 },
			transitionEnd: { opacity: 1 }
		}
	};

	const planetNames = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

	const listItems = planetNames.map((name, index) => {
		return (
			<motion.li 
				key={index} 
				variants={liVariants} 
				custom={index}
			>
				<Link 
					className="planet-link link" 
					to={index === 0 ? '/' : `/${name}`}
					onClick={() => {
						if (menuIsOpen) {
							dispatch(setMenuIsOpen(false));
						}
						setTimeout(() => dispatch(changeCurrentPage(name)), 500);
						changePageColor(index);
					}}
				>
					<motion.span 
						className="planet-link-icon" 
						id={`${name}-icon`}
						data-testid='icon'
					>
					</motion.span>
					{name}
					<img 
						className="chevron" 
						src={chevron} 
						aria-hidden="true" 
						alt=""
					/>
				</Link>
			</motion.li>
		);
	});

	console.log(listItems);

	return (
		<motion.nav 
			id="planet-nav" 
			variants={navVariants} 
			animate={controls} 
			initial='hidden'
		>
			<ul>
				{listItems}
			</ul>
		</motion.nav>
	);
};

export default PlanetNav;