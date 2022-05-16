import { Img } from '../../components/img/Img';
import { Info } from '../../components/info/Info';
import { InfoNav } from '../../components/info-nav/InfoNav';
import { Stats } from '../../components/stats/Stats';
import { useDispatch } from 'react-redux';
import { changeCurrentPage } from '../../components/info/infoSlice';
import { changePageColor } from '../../modules/functions';
import { useEffect } from 'react';


export const Saturn = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeCurrentPage('saturn'));
    changePageColor(5);
  })

  return (
    <article>
      <div className="desktop-container"> 
        <Img />
        <div className='tablet-container'>
          <Info />
          <InfoNav />
        </div>
      </div>
      <Stats />
    </article>
  )
}