import './InfoNav.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeParagraph } from '../info/infoSlice';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export const InfoNav = () => {
  const currentSection = useSelector((state) => state.info.currentSection);
  const dispatch = useDispatch();

  useEffect(() => {
    
    const infoNavButtons = document.getElementsByClassName('info-nav-button');
    for (let i = 0; i < infoNavButtons.length; i++) {
      infoNavButtons[i].classList.remove('selected-info-nav-button', 'non-selected-nav-button');
      if (infoNavButtons[i].getAttribute('data-title') === currentSection) {
        infoNavButtons[i].classList.add('selected-info-nav-button');
      } else {
        infoNavButtons[i].classList.add('non-selected-nav-button');
      }
    }
  }, [currentSection]);

  const navTitles = ['overview', 'structure', 'surface'];
  const navListItems = navTitles.map((title, index) => {
    return (
      <motion.li key={index}>
        <button 
          data-title={title}
          className={index === 0 ? 'selected-info-nav-button info-nav-button' : 'info-nav-button'}
          onClick={() => dispatch(changeParagraph(title))} >
          <span className="info-nav-number">0{index + 1}</span>
          {index === 1 && <span className="tablet-title">internal&nbsp;</span>}
          <h3>{title}</h3>
          {index === 2 && <span className="tablet-title">&nbsp;geology</span>}
        </button>
      </motion.li>
    )});

  return (
    <nav className="info-nav">
      <ul>
        {navListItems}
      </ul>
    </nav>
  )
}