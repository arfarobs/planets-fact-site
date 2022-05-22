import './Img.css';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';



export const Img = () => {
  const currentSection = useSelector((state) => state.info.currentSection);
  const currentPage = useSelector((state) => state.info.currentPage);
  const primaryImgSrc = currentSection === 'structure' ? `planets/planet-${currentPage}-internal.svg`.toLowerCase() : `planets/planet-${currentPage}.svg`.toLowerCase();
  const secondaryImgSrc = `planets/geology-${currentPage}.png`.toLowerCase();
  const secondaryImg = (currentSection === 'surface') ? <img className="planet-img-secondary" src={secondaryImgSrc} alt={`${currentPage} geology`} /> : null;

  const imgVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: '0.5'
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn'
      }
    }
  }

  return (
    <>
      <motion.img 
        className="planet-img" 
        src={primaryImgSrc} 
        alt={currentPage} 
        variants={imgVariants}
        exit='exit'
        initial='initial'
        animate='animate'
      />
      {secondaryImg}
    </>
  )
}