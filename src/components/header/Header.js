import { Link } from "react-router-dom";
import './Header.css';
import chevron from '../../assets/images/icon-chevron.svg';
import hamburger from'../../assets/images/icon-hamburger.svg';
import { changeCurrentPage } from "../info/infoSlice";
import { useDispatch } from "react-redux";

export const Header = (props) => {
  const dispatch = useDispatch();

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
          <li>
            <Link className="planet-link link" onClick={() => dispatch(changeCurrentPage('Mercury'))} to="/">
              <span className="planet-link-icon" id="mercury-icon"></span>
              Mercury
              <img className="chevron" src={chevron} aria-hidden="true" alt=""/>
            </Link>
          </li>
          <li>
            <Link className="planet-link link" onClick={() => dispatch(changeCurrentPage('Venus'))} to="/venus">
              <span className="planet-link-icon" id="venus-icon"></span>
              Venus
              <img className="chevron" src={chevron} aria-hidden="true" alt=""/>
            </Link>
          </li>
          <li>
            <Link className="planet-link link" onClick={() => dispatch(changeCurrentPage('Earth'))} to="/earth">
              <span className="planet-link-icon" id="earth-icon"></span>
              Earth
              <img className="chevron" src={chevron} aria-hidden="true" alt=""/>
            </Link>
          </li>
          <li>
            <Link className="planet-link link" onClick={() => dispatch(changeCurrentPage('Mars'))} to="/mars">
              <span className="planet-link-icon" id="mars-icon"></span>
              Mars
              <img className="chevron" src={chevron} aria-hidden="true" alt=""/>
            </Link>
          </li>
          <li>
            <Link className="planet-link link" onClick={() => dispatch(changeCurrentPage('Jupiter'))} to="/jupiter">
              <span className="planet-link-icon" id="jupiter-icon"></span>
              Jupiter
              <img className="chevron" src={chevron} aria-hidden="true" alt=""/>
            </Link>
          </li>
          <li>
            <Link className="planet-link link" onClick={() => dispatch(changeCurrentPage('Saturn'))} to="/saturn">
              <span className="planet-link-icon" id="saturn-icon"></span>
              Saturn
              <img className="chevron" src={chevron} aria-hidden="true" alt=""/>
            </Link>
          </li>
          <li>
            <Link className="planet-link link" onClick={() => dispatch(changeCurrentPage('Uranus'))} to="/uranus">
              <span className="planet-link-icon" id="uranus-icon"></span>
              Uranus
              <img className="chevron" src={chevron} aria-hidden="true" alt=""/>
            </Link>
          </li>
          <li>
            <Link className="planet-link link" onClick={() => dispatch(changeCurrentPage('Neptune'))} to="/neptune">
              <span className="planet-link-icon" id="neptune-icon"></span>
              Neptune
              <img className="chevron" src={chevron} aria-hidden="true" alt=""/>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}