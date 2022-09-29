import React, { useRef } from 'react';
import { Slide, SlideshowRef } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../style.css';
import Cars from '../../../../images/Cars.png';
import Man from '../../../../images/Man.png';
import Vector from '../../../../images/Vector.png';
import Delivery from '../../../../images/Delivery.png';
import { StyledImageSlider } from '../../../StyledComponents/Wrapper';

const Example = () => {
  const images = [Cars, Delivery, Vector, Man];

  const slideRef = useRef<SlideshowRef>(null);

  return (
    <StyledImageSlider indicators={true} ref={slideRef}>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${images[0]})`,
            backgroundSize: '100% 100%',
          }}
        />
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${images[1]})`,
            backgroundSize: '100% 100%',
          }}
        />
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${images[2]})`,
            backgroundSize: '100% 100%',
          }}
        />
      </div>
      <div className="each-slide-effect">
        <div
          style={{
            backgroundImage: `url(${images[3]})`,
            backgroundSize: '100% 100%',
          }}
        />
      </div>
    </StyledImageSlider>
  );
};

export default Example;
