import Img from '../../components/img/Img';
import Info from '../../components/info/Info';
import { InfoNav } from '../../components/info-nav/InfoNav';
import { Stats } from '../../components/stats/Stats';

export const Neptune = () => {
	return (
		<article>
			<div className="desktop-container"> 
				<Img />
				<div className='tablet-container'>
					<Info />
					<InfoNav />
				</div>
			</div>
			<Stats />
		</article>
	);
};