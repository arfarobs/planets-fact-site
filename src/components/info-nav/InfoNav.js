import './InfoNav.css';
import { useDispatch } from 'react-redux';
import { changeParagraph } from '../info/infoSlice';

export const InfoNav = () => {
  const dispatch = useDispatch();

  const changeActive = (e) => {
    const infoNavItems = document.getElementsByClassName('info-nav-item');
    console.log(infoNavItems);
    for (let i = 0; i < infoNavItems.length; i++) {
      infoNavItems[i].classList.remove('selected-info-nav-item');
    }
    e.target.parentElement.parentElement.classList.add('selected-info-nav-item');
  }

  const navTitles = ['overview', 'structure', 'surface'];
  const navListItems = navTitles.map((title, index) => {
    return (
      <li className={index === 0 ? 'selected-info-nav-item info-nav-item' : 'info-nav-item'} key={index}>
        <button 
          className="info-nav-button" 
          onClick={(e) => {
            dispatch(changeParagraph(title));
            changeActive(e);
          }} >
          <span className="info-nav-number">0{index + 1}</span>
          {index === 1 && <span className="tablet-title">internal&nbsp;</span>}
          <h3>{title}</h3>
          {index === 2 && <span className="tablet-title">&nbsp;geology</span>}
        </button>
      </li>
    )});

  return (
    <nav className="info-nav">
      <ul>
        {navListItems}
      </ul>
    </nav>
  )
}