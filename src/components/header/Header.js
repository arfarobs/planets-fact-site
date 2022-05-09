import { Link } from "react-router-dom";
import './Header.css';
import chevron from '../../assets/images/icon-chevron.svg';
import hamburger from'../../assets/images/icon-hamburger.svg';
import { changeCurrentPage } from "../info/infoSlice";
import { useDispatch } from "react-redux";

export const Header = (props) => {
  const dispatch = useDispatch();

  const pageColors = ['#419EBB', '#EDA249', '#6D2ED5', '#D14C32', '#D83A34', '#CD5120', '#1EC1A2', '#2D68F0']
  const planetNames = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']

  const changePageColor = (index) => {
    document.documentElement.style.setProperty('--pageColor', pageColors[index]);
  }

  const listItems = planetNames.map((name, index) => {
    return (
      <li>
        <Link 
          className="planet-link link" 
          onClick={() => {
            dispatch(changeCurrentPage(planetNames[index]));
            changePageColor(index);
          }} 
          to={`/${planetNames[index]}`}>
          <span className="planet-link-icon" id={`${planetNames[index]}-icon`}></span>
            {planetNames[index]}
            <img className="chevron" src={chevron} aria-hidden="true" alt=""/>
        </Link>
      </li>
    )
  })

  return (
    <header className="header">
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
    </header>
  );
}