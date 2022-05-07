import './Stats.css';

export const Stats = () => {
  return (
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
  )
}