import './Img.css';
import mercury from '../../assets/images/planets/planet-mercury.svg';

export const Img = () => {
  return (
    <>
      <img className="planet-img" src={mercury} alt="mercury" />
    </>
  )
}