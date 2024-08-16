import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../../src/assets/images/1.jpg'
import img2 from '../../../../src/assets/images/bn.jpeg'

const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex items-center justify-center'>
            <img src={img2} className='h-[600px] w-[950px]' />
        </div>
        // <Carousel>
        //     <div>
        //         <img src={img1} />
        //     </div>
        //     <div>
        //         <img src={img2} />
        //     </div>
        //     <div>
        //         <img src={img3} />
        //     </div>
        //     <div>
        //         <img src={img4} />
        //     </div>
        //     <div>
        //         <img src={img5} />
        //     </div>
        //     <div>
        //         <img src={img6} />
        //     </div>
        //     <div>
        //         <img src={img7} />
        //     </div>
        // </Carousel>
    );
};

export default Banner;