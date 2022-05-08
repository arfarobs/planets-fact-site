import './Stats.css';
import { useSelector } from 'react-redux';

export const Stats = () => {
  const statsTitles = ['rotation time', 'revolution time', 'radius', 'average temp'];
  const statsValues = useSelector((state) => state.info.stats);
  const listItems = statsTitles.map((title, index) => {
    return (
    <li className="stats-item">
      <h4 className="stat-title">{title}</h4>
      <p className="stat-value">{statsValues[index]}</p>
    </li>
  )})

  return (

    <ul className="stats">
      {listItems}
    </ul>
  )
}