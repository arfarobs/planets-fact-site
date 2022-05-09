import './Info.css';
import { useSelector } from 'react-redux';

export const Info = () => {
  const paragraph = useSelector((state) => state.info.paragraph);
  const heading = useSelector((state) => state.info.currentPage);
  const wikiSrc = useSelector((state) => state.info.wikiSrc);

  return (
    <div className="info-container">
      <h2>{heading}</h2>
      <p className='info-p'>
        {paragraph}
      </p>
      <p className="source">Source :&nbsp;
        <a 
          href={wikiSrc} 
          id="wiki" 
          target="_blank" 
          rel="noreferrer"
        >
          Wikipedia
        </a>
      </p>
    </div>
  )
}