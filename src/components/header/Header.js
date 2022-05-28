import { Link } from 'react-router-dom';
import './Header.css';
import chevron from '../../assets/images/icon-chevron.svg';
import hamburger from'../../assets/images/icon-hamburger.svg';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuIsOpen } from './headerSlice';
import { useEffect } from 'react';

export const Header = () => {
	const menuIsOpen = useSelector((state) => state.header.menuIsOpen);
	const dispatch = useDispatch();

	useEffect(() => {
		document.getElementById('planet-nav').style.display = menuIsOpen ? 'block' : 'none';

	}, [menuIsOpen]);

	const headerVariants = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				when: 'beforeChildren',
				staggerChildren: 0.1
			}
		},
		hidden: {
			y: -100,
			opacity: 0
		},
	};

	const h1Variants = {
		visible: {
			textShadow: '0px 0px 0px #FFF, 0px 0px 0px #FFF, 0px 0px 0px #FFF, 0px 0px 0px #FFF',
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			}
		},
		hidden: {
			textShadow: '0px 0px 3px #FFF, 0px 0px 6px #FFF, 0px 0px 9px #FFF, 0px 0px 15px #FFF'
		}
	};

	const liVariants = {
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
				type: 'spring',
				stiffness: '70'
			}
		},
		hidden: {
			opacity: 0
		}
	};

	const buttonVariants = {
		visible: {
			opacity: 1,
			transition: {
				ease: 'easeOut',
				duration: 0.5,
				delay: 0.4
			}
		},
		hidden: {
			opacity: 0
		}
	};

	const planetNames = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

	const listItems = planetNames.map((name, index) => {
		return (
			<motion.li key={index} variants={liVariants}>

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
		<motion.header 
			className="header"
			variants={headerVariants}
			animate='visible'
			initial='hidden'
		>
			<Link className="link" to="/">
				<motion.h1 variants={h1Variants}>The Planets</motion.h1>
			</Link>
			<motion.button 
				variants={buttonVariants} 
				id="planet-menu-btn" 
				onClick={() => {
					dispatch(toggleMenuIsOpen());
				}
				}
			>
				<img src={hamburger} alt="Menu" />
			</motion.button>
			<nav id="planet-nav">
				<ul>
					{listItems}
				</ul>
			</nav>
		</motion.header>
	);
};