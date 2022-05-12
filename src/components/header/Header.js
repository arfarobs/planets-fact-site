import { Link } from "react-router-dom";
import './Header.css';
import chevron from '../../assets/images/icon-chevron.svg';
import hamburger from'../../assets/images/icon-hamburger.svg';
import { changeCurrentPage } from "../info/infoSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

export const Header = (props) => {
  const dispatch = useDispatch();

  const pageColors = ['#419EBB', '#EDA249', '#6D2ED5', '#D14C32', '#D83A34', '#CD5120', '#1EC1A2', '#2D68F0']
  const planetNames = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']

  const changePageColor = (index) => {
    document.documentElement.style.setProperty('--pageColor', pageColors[index]);
  }

  const listItems = planetNames.map((name, index) => {
    return (
      <li key={index}>

        <Link 
          className="planet-link link" 
          onClick={() => {
            dispatch(changeCurrentPage(name));
            changePageColor(index);
          }} 
          to={index === 0 ? '/' : `/${name}`}>

          <span className="planet-link-icon" id={`${name}-icon`}></span>

          {name}

          <img className="chevron" src={chevron} aria-hidden="true" alt=""/>

        </Link>

      </li>
    )
  })

  return (
    <motion.header 
      className="header"
      animate={{ y: 0 }}
      initial={{ y: -200 }}
      transition={{ duration: 0.5 }}
    >
      <Link className="link" to="/">
        <h1>The Planets</h1>
      </Link>
      <button id="planet-menu-btn" onClick={props.onClick}>
        <img src={hamburger} alt="Menu" />
      </button>
      <nav id="planet-nav">
        <ul>
          {listItems}
        </ul>
      </nav>
    </motion.header>
  );
}