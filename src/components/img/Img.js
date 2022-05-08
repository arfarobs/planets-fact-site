import './Img.css';
import { useSelector } from 'react-redux';



export const Img = () => {
  const currentSection = useSelector((state) => state.info.currentSection);
  const currentPage = useSelector((state) => state.info.currentPage);
  const primaryImgSrc = currentSection === 'structure' ? `planets/planet-${currentPage}-internal.svg`.toLowerCase() : `planets/planet-${currentPage}.svg`.toLowerCase();
  const secondaryImgSrc = `planets/geology-${currentPage}.png`.toLowerCase();
  const secondaryImg = (currentSection === 'surface') ? <img className="planet-img-secondary" src={secondaryImgSrc} alt={`${currentPage} geology`} /> : null;

  return (
    <>
      <img 
        className="planet-img" 
        src={primaryImgSrc} 
        alt={currentPage} 
      />
      {secondaryImg}
    </>
  )
}