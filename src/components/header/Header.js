import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Link className="link" to="/">
        <h1>The Planets</h1>
      </Link>
      <nav>
        <ul>
          <li><Link className="nav-link link" to="/">Mercury</Link></li>
          <li><Link className="nav-link link" to="/venus">Venus</Link></li>
          <li><Link className="nav-link link" to="/earth">Earth</Link></li>
          <li><Link className="nav-link link" to="/mars">Mars</Link></li>
          <li><Link className="nav-link link" to="/jupiter">Jupiter</Link></li>
          <li><Link className="nav-link link" to="/saturn">Saturn</Link></li>
          <li><Link className="nav-link link" to="/uranus">Uranus</Link></li>
          <li><Link className="nav-link link" to="/neptune">Neptune</Link></li>
        </ul>
      </nav>
    </header>
  );
}