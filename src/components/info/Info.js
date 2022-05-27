import './Info.css';
import { useDispatch, useSelector } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { toggleParagraphIsChanging } from './infoSlice';

export const Info = () => {
  const paragraph = useSelector((state) => state.info.paragraph);
  const heading = useSelector((state) => state.info.currentPage);
  const wikiSrc = useSelector((state) => state.info.wikiSrc);
  const paragraphIsChanging = useSelector((state) => state.info.paragraphIsChanging);
  const controls = useAnimation();
  const dispatch = useDispatch();
  

  const paragraphAnimations = async () => {
    await controls.start('exitParagraph');
    await controls.start('enterParagraph');
    dispatch(toggleParagraphIsChanging())
  }

  useEffect(() => {
    if (paragraphIsChanging) {
      paragraphAnimations()
    } else {
      controls.start('visible');
    }
  })

  const variants = {
    visible: (i) => ({
      opacity: i === 3 ? 0.5 : 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
    exit: {
      opacity: 0
    },
  }
  
  const paragraphVariants = {
    visible: (i) => ({
      opacity: i === 3 ? 0.5 : 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
    exit: {
      opacity: 0
    },
    enterParagraph: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exitParagraph: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div className="info-container" variants={variants} animate={controls} initial='hidden' exit='exit'>
      <motion.h2 variants={variants} custom={1}>{heading}</motion.h2>
      <motion.p className='info-p' variants={paragraphVariants} custom={2}>
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