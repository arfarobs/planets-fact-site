import './Header.css';
import { MenuBtn } from './menu-btn/MenuBtn';
import { PlanetNav } from './planet-nav/PlanetNav';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Header = () => {
	

	console.count('rendered');

	/*LOOK AT README!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

	/*Refactor animations. No longer need controls.*/



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
			opacity: 1,
			textShadow: ['0px 0px 0px #FFF, 0px 0px 0px #FFF, 0px 0px 0px #FFF, 0px 0px 0px #FFF', '0px 0px 3px #FFF, 0px 0px 6px #FFF, 0px 0px 9px #FFF, 0px 0px 15px #FFF', '0px 0px 0px #FFF, 0px 0px 0px #FFF, 0px 0px 0px #FFF, 0px 0px 0px #FFF'],
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
			}
		},
		hidden: {
			opacity: 0,
			textShadow: '0px 0px 0px #FFF, 0px 0px 0px #FFF, 0px 0px 0px #FFF, 0px 0px 0px #FFF',
		}
	};

	

	


	

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
			<MenuBtn />
			<PlanetNav />
		</motion.header>
	);
};