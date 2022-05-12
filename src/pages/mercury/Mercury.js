import { Img } from '../../components/img/Img';
import { Info } from '../../components/info/Info';
import { InfoNav } from '../../components/info-nav/InfoNav';
import { Stats } from '../../components/stats/Stats';
import { motion } from 'framer-motion';

export const Mercury = () => {
  return (
    <motion.article
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: '100vw', opacity: 0 }}
      transition= {{ delay: 0.5, duration: 0.7, type: 'spring', stiffness: 1000 }}
    >
      <div className="desktop-container"> 
        <Img />
        <div className='tablet-container'>
          <Info />
          <InfoNav />
        </div>
      </div>
      <Stats />
    </motion.article>
  )
}