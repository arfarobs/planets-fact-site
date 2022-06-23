import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuIsOpen } from './menuSlice';
import hamburger from '../../../assets/images/icon-hamburger.svg';
import './menuBtn.css';


const MenuBtn = () => {
	const dispatch = useDispatch();
	const menuIsOpen = useSelector(state => state.menu.menuIsOpen);
	
	const buttonVariants = {
		visible: {
			opacity: menuIsOpen ? 0.25 : 1,
			transition: {
				ease: 'easeOut',
				duration: 0.5,
				delay: 0.4
			}
		},
		hidden: { opacity: 0 },
		whileTap: { scale: 0.9 }
	};

	return (
		<>
			<motion.button 
				variants={buttonVariants}
				animate='visible'
				initial='hidden'
				whileTap='whileTap'
				data-testid="menu-btn"
				id="planet-menu-btn" 
				aria-label='menu'
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

export default MenuBtn;