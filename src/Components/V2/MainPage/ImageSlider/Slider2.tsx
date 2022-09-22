import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../style.css'
import Logo from '../../../../images/LogoMain.png';
import Man from '../../../../images/Man.png'
import Vector from '../../../../images/Vector.png'
import Delivery from '../../../../images/Delivery.png'

const Example = () => {
    const images = [
        Logo,
        Delivery,
        Vector,
        Man,
    ];


    return (
        <Slide >
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }} />
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }} />
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }} />
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }} />
            </div>
        </Slide>
    );
};

export default Example;