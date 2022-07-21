import { toggleParagraphIsChanging } from '../infoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Paragraph = () => {
	const paragraph = useSelector((state) => state.info.paragraph);
	const paragraphIsChanging = useSelector((state) => state.info.paragraphIsChanging);

	const dispatch = useDispatch();
	const controls = useAnimation();

	const paragraphAnimations = async () => {
		await controls.start('exitParagraph');
		await controls.start('enterParagraph');
		dispatch(toggleParagraphIsChanging(false));
	};

	useEffect(() => {
		if (paragraphIsChanging) {
			paragraphAnimations();
		} else {
			controls.start('visible');
		}
	});

	const paragraphVariants = {
		visible: i => ({
			opacity: 1,
			transition: { delay: i * 0.2 },
		}),
		hidden: { opacity: 0 },
		exit: { opacity: 0 },
		enterParagraph: {
			opacity: 1,
			transition: { duration: 0.5 }
		},
		exitParagraph: {
			opacity: 0,
			transition: { duration: 0.5 }
		}
	};

	return (
		<>
			<motion.p 
				className='info-p' 
				variants={paragraphVariants} 
				custom={2}
				animate={controls}
				initial='hidden'
				data-testid='paragraph'
			>
				{paragraph}
			</motion.p>
		</>
	);
};

export default Paragraph;