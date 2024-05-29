import React, { useState, useEffect } from 'react';
import '../Styles/CarouselStyle.css'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        require('../Images/CarouselImage1.jpg'),
        require('../Images/CarouselImage2.jpg'),
        require('../Images/CarouselImage3.jpg'),
        require('../Images/CarouselImage4.jpg'),
    ];

    const goToNextSlide = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 2000);
        return () => clearInterval(intervalId);
    }, [currentIndex]); 

    return (
        <>
            <header>
                <div className="carousel">
                    <button className="prev" onClick={goToPrevSlide}><GrPrevious /></button>
                    <div className="slides">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={index === currentIndex ? "slide active" : "slide"}
                            >
                                <img src={img} alt="photo" />
                            </div>
                        ))}
                    </div>
                    <button className="next" onClick={goToNextSlide}><GrNext /></button>
                </div>
            </header>
        </>
    );
};

export default Carousel;