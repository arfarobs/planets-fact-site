import './Info.css';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export const Info = () => {
  const paragraph = useSelector((state) => state.info.paragraph);
  const heading = useSelector((state) => state.info.currentPage);
  const wikiSrc = useSelector((state) => state.info.wikiSrc);

  const variants = {
    visible: (i) => ({
      opacity: i === 3 ? 0.5 : 1,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: { opacity: 0 },
    exit: {
      opacity: 0
    }
  }
  

  return (
    <motion.div className="info-container" variants={variants} animate='visible' initial='hidden' exit='exit'>
      <motion.h2 variants={variants} custom={1}>{heading}</motion.h2>
      <motion.p className='info-p' variants={variants} custom={2}>
        {paragraph}
      </motion.p>
      <motion.p className="source" 
        variants={variants} 
        custom={3}
      >Source :&nbsp;
        <motion.a 
          variants={variants}
          custom={4}
          href={wikiSrc} 
          id="wiki" 
          target="_blank" 
          rel="noreferrer"
        >
          Wikipedia
        </motion.a>
      </motion.p>
    </motion.div>
  )
}