import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import img1 from '../../../assets/home/01.jpg'
// import img2 from '../../../assets/home/02.jpg'
// import img3 from '../../../assets/home/03.png'
// import img4 from '../../../assets/home/04.jpg'
// import img5 from '../../../assets/home/05.png'
// import img6 from '../../../assets/home/06.png'

import img1 from '../../../../src/assets/images/1.jpg'
import img2 from '../../../../src/assets/images/2.jpg'
import img3 from '../../../../src/assets/images/3.jpg'
import img4 from '../../../../src/assets/images/4.jpg'
import img5 from '../../../../src/assets/images/5.jpg'
import img6 from '../../../../src/assets/images/6.jpg'
import img7 from '../../../../src/assets/images/7.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
            <div>
                <img src={img7} />
            </div>
        </Carousel>
    );
};

export default Banner;