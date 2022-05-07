import './Info.css';
import { useSelector } from 'react-redux';

export const Info = () => {
  const paragraph = useSelector((state) => state.info.paragraph);
  const heading = useSelector((state) => state.info.currentPage);

  return (
    <div className="info-container">
      <h2>{heading}</h2>
      <p className='info-p'>
        {paragraph}
      </p>
      <p className="source">Source: <span id="wiki">Wikipedia</span></p>
    </div>
  )
}