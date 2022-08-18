import './Img.css';
import { useSelector, useDispatch } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { toggleParagraphIsChanging, setSurfaceStatus } from '../info/infoSlice';


const Img = () => {
	const currentSection = useSelector((state) => state.info.currentSection);
	const currentPage = useSelector((state) => state.info.currentPage);
	const paragraphIsChanging = useSelector((state) => state.info.paragraphIsChanging);
	const surfaceStatus = useSelector((state) => state.info.surfaceStatus);

	const controls = useAnimation();
	const dispatch = useDispatch();

	const primaryImgSrc = currentSection === 'structure' ? `planets/planet-${currentPage}-internal.svg`.toLowerCase() : `planets/planet-${currentPage}.svg`.toLowerCase();
	const secondaryImgSrc = `planets/geology-${currentPage}.png`.toLowerCase();


	const animateImgChange = async () => {
		if (surfaceStatus === 'entering') {
			await controls.start('exit');
			await controls.start('enterSecondary');
			dispatch(setSurfaceStatus());
		} else if (surfaceStatus === 'exiting') {
			controls.start('exitSecondary');
			await controls.start('exit');
			await controls.start('enter');
			dispatch(setSurfaceStatus());
		} else {
			await controls.start('exit');
			await controls.start('enter');
		}

		dispatch(toggleParagraphIsChanging(false));
	};

	useEffect(() => {
		if (paragraphIsChanging) {
			animateImgChange();
		} else {
			controls.start('visible');
		}
	});

	const enter = {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut'
		}
	};

	const primaryImgVariants = {
		visible: {
			scale: 1,
			transition: {
				duration: 0.2,
				delay: 1,
				ease: 'easeOut'
			}
		},
		hidden: {
			scale: 0,
		},
		exit: {
			scale: 0,
			opacity: 0,
			transition: {
				duration: 0.5,
				ease: 'easeIn'
			}
		},
		enter: enter,
		enterSecondary: enter
	};

	const secondaryImgVariants = {
		hidden: {
			y: '+100vh'
		},
		exitSecondary: {
			y: '+100vh',
			transition: {
				duration: 0.5
			}
		},
		enterSecondary: {
			y: 0,
			transition: {
				duration: 0.5
			}
		}
	};

	const secondaryImg = (currentSection === 'surface') ? <motion.img className="planet-img-secondary" src={secondaryImgSrc} alt={`${currentPage} geology`} variants={secondaryImgVariants} animate={controls} initial='hidden' exit='exit' /> : null;


	return (
		<div className="image-container">
			<span className="image-wrapper">
				<motion.img 
					className="planet-img" 
					src={primaryImgSrc} 
					alt={currentPage} 
					variants={primaryImgVariants}
					exit='exit'
					initial='hidden'
					animate={controls}
					style={currentPage === 'saturn' ? {marginRight: '105px'} : {marginRight: '130px'}}
				/>
			</span>
			{secondaryImg}
		</div>
	);
};

export default Img;