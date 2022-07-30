import './Stats.css';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Stats = () => {
	const statsTitles = ['rotation time', 'revolution time', 'radius', 'average temp'];
	const statsValues = useSelector((state) => state.info.stats);

	const variants = {
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: 1
			},
		},
		hidden: {
			opacity: 0,
			transition: {
				duration: 0.5
			}
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5
			}
		}
	};

	const listItems = statsTitles.map((title, index) => {
		return (
			<li className="stats-item" key={index}>
				<h4 className="stat-title">{title}</h4>
				<motion.p data-testid="stats-paragraph" className="stat-value" variants={variants} animate='visible' initial='exit' exit='exit'>{statsValues[index]}</motion.p>
			</li>
		);});

	return (
		<ul className="stats">
			{listItems}
		</ul>
	);
};

export default Stats;