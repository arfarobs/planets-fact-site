import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { toggleMenuIsOpen } from './menuSlice';
import hamburger from '../../../assets/images/icon-hamburger.svg';


export const MenuBtn = () => {
	const dispatch = useDispatch();
	
	const buttonVariants = {
		visible: {
			opacity: 1,
			transition: {
				ease: 'easeOut',
				duration: 0.5,
				delay: 0.4
			}
		},
		hidden: { opacity: 0 }
	};

	return (
		<>
			<motion.button 
				variants={buttonVariants}
				animate='visible'
				initial='hidden'
				id="planet-menu-btn" 
				onClick={() => {
					dispatch(toggleMenuIsOpen());
				}
				}
			>
				<img src={hamburger} alt="Menu" />
			</motion.button>
		</>
	);
};