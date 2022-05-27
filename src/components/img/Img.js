import './Img.css';
import { useSelector } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { toggleParagraphIsChanging } from '../info/infoSlice';


export const Img = () => {
  const currentSection = useSelector((state) => state.info.currentSection);
  const currentPage = useSelector((state) => state.info.currentPage);
  const paragraphIsChanging = useSelector((state) => state.info.paragraphIsChanging);

  const controls = useAnimation();

  const primaryImgSrc = currentSection === 'structure' ? `planets/planet-${currentPage}-internal.svg`.toLowerCase() : `planets/planet-${currentPage}.svg`.toLowerCase();
  const secondaryImgSrc = `planets/geology-${currentPage}.png`.toLowerCase();


  const animateImgChange = async () => {
    await controls.start('exit');
    await controls.start('enter');
    toggleParagraphIsChanging();
  }

  useEffect(() => {
    if (paragraphIsChanging) {
      animateImgChange();
    } else {
      controls.start('visible');
    }
  })

  const primaryImgVariants = {
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
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
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const secondaryImgVariants = {
    visible: {
      y: 0,
      transition: {
        duration: 1
      }
    },
    hidden: {
      y: '+100vh'
    },
    exit: {
      y: '+100vh',
      transition: {
        duration: 1
      }
    }
  }

  const secondaryImg = (currentSection === 'surface') ? <motion.img className="planet-img-secondary" src={secondaryImgSrc} alt={`${currentPage} geology`} variants={secondaryImgVariants} animate='visible' initial='hidden' exit='exit' /> : null;


  return (
    <>
      <motion.img 
        className="planet-img" 
        src={primaryImgSrc} 
        alt={currentPage} 
        variants={primaryImgVariants}
        exit='exit'
        initial='hidden'
        animate={controls}
      />
      {secondaryImg}
    </>
  )
}