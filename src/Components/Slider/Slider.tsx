import React from 'react';
import SlickCarousel from "react-slick";
import SliderItem from './SliderItem/SliderItem';

import styles from './Slider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        className: styles.Carousel
    };
    return (
        <div className={ styles.Slider }>
            <SlickCarousel {...settings}>
                <SliderItem image="/images/photos/banner-1.jpg" alt="pizza picture" />
                <SliderItem image="/images/photos/banner-2.jpg" alt="pizza picture" />
            </SlickCarousel>
        </div>
    );
}

export default Slider;