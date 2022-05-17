import { Link } from "react-router-dom";
import './Header.css';
import chevron from '../../assets/images/icon-chevron.svg';
import hamburger from'../../assets/images/icon-hamburger.svg';
import { motion } from "framer-motion";

export const Header = (props) => {
  const headerVariants = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    initial: {
      y: -100,
      opacity: 0
    },
  }

  const h1Variants = {
    animate: {
      textShadow: '0px 0px 0px #FFF, 0px 0px 0px #FFF, 0px 0px 0px #FFF, 0px 0px 0px #FFF',
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        yoyo: 2
      }
    },
    initial: {
      textShadow: '0px 0px 3px #FFF, 0px 0px 6px #FFF, 0px 0px 9px #FFF, 0px 0px 15px #FFF'
    }
  }

  const liVariants = {
    animate: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        type: 'spring',
        stiffness: '70'
      }
    },
    initial: {
      x: '100vw'
    }
  }

  const buttonVariants = {
    animate: {
      opacity: 0.25,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
        delay: 0.4
      }
    },
    initial: {
      opacity: 0
    }
  }

  const planetNames = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']

  const listItems = planetNames.map((name, index) => {
    return (
      <motion.li key={index} variants={liVariants}>

        <Link 
          className="planet-link link" 
          
          to={index === 0 ? '/' : `/${name}`}>

          <span className="planet-link-icon" id={`${name}-icon`}></span>

          {name}

          <img className="chevron" src={chevron} aria-hidden="true" alt=""/>

        </Link>

      </motion.li>
    )
  })

  return (
    <motion.header 
      className="header"
      variants={headerVariants}
      animate='animate'
      initial='initial'
    >
      <Link className="link" to="/">
        <motion.h1 variants={h1Variants}>The Planets</motion.h1>
      </Link>
      <motion.button variants={buttonVariants} id="planet-menu-btn" onClick={props.onClick}>
        <img src={hamburger} alt="Menu" />
      </motion.button>
      <nav id="planet-nav">
        <ul>
          {listItems}
        </ul>
      </nav>
    </motion.header>
  );
}