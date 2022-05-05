import './Mercury.css';
import mercury from '../../../assets/images/planets/planet-mercury.svg';

export const Mercury = () => {
  const changeInfo = (e) => {
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
        <button className="info-nav-button" onClick={changeInfo}>
          <span className="info-nav-number">0{index + 1}</span>
          <h3>{title}</h3>
        </button>
      </li>
    )});

  return (
    <>
      <article>
        <img className="planet-img" src={mercury} alt="Mercury" />
        <div className="info-container">
          <h2>Mercury</h2>
          <p className='info-p'>
            Mercury is the smallest planet in the Solar System and the closest to the Sun. 
            Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. 
            Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
          </p>
          <p className="source">Source: <span id="wiki">Wikipedia</span></p>
        </div>
        <nav className="info-nav">
          <ul>
            {navListItems}
          </ul>
        </nav>
        <ul className="stats">
          <li className="stats-item">
            <h4 className="stat-title">rotation time</h4>
            <p className="stat-value">58.6 days</p>
          </li>
          <li className="stats-item">
            <h4 className="stat-title">revolution time</h4>
            <p className="stat-value">87.97 days</p>
          </li>
          <li className="stats-item">
            <h4 className="stat-title">radius</h4>
            <p className="stat-value">2439.7 km</p>
          </li>
          <li className="stats-item">
            <h4 className="stat-title">average temp</h4>
            <p className="stat-value">460 degC</p>
          </li>
        </ul>
      </article>
    </>
  )
}