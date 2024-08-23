import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 300px;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
  position: relative;
`;

const ImagesWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.translate}px);
`;

const Image = styled.img`
  width: 100%;
  flex-shrink: 0;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  ${props => (props.left ? "left: -5px;" : "right: 5px;")}
`;

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translate, setTranslate] = useState(0);
    const imageWidthRef = useRef(null);
  
    useEffect(() => {
      if (imageWidthRef.current) {
        const width = imageWidthRef.current.clientWidth;
        setTranslate(-currentIndex * width);
      }
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    }

    const nextSlide = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex +1)
    }

    const translateValue = -currentIndex * 100

    return (
        <CarouselContainer>
            <ImagesWrapper translate={translate}>
                {images.map((image, index) => (
                    <Image key={index} src={image} alt={`slide-${index}`} ref={imageWidthRef}/>
                ))}
            </ImagesWrapper>
            <Button left onClick={prevSlide}>
                &#10094;
            </Button>
            <Button onClick={nextSlide}>
                &#10095;
            </Button>
        </CarouselContainer>
    )
}

export default Carousel;