import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import image1 from "../../assets/sliderImages/1.jpg";
import image2 from "../../assets/sliderImages/2.jpg";
import image3 from "../../assets/sliderImages/3.jpg";
import image4 from "../../assets/sliderImages/4.jpg";
import image5 from "../../assets/sliderImages/5.jpg";
import image6 from "../../assets/sliderImages/6.jpg";
import image7 from "../../assets/sliderImages/7.jpg";
import image8 from "../../assets/sliderImages/8.jpg";
import image9 from "../../assets/sliderImages/9.jpg";
import image10 from "../../assets/sliderImages/10.jpg";
import image11 from "../../assets/sliderImages/11.jpg";
import styled from "styled-components";
import Image from "next/image";

const MainContainer = styled(motion.div)`
  position: relative;
  height: 13rem;
  background: #fff;
  width: 100%;
  cursor: grab;
  overflow: hidden;
  margin-bottom: 15rem;
`;
const Container = styled(motion.div)`
  display: flex;
  position: absolute;
  margin-top: 1rem;
  background: #fff;
  width: 120vw;
  height: 12rem;
  @media (max-width: 1000px) {
    height: 12rem;
    width: 120vw;
  }
`;
const ImageContainer = styled(motion.div)`
  pointer-events: none;
  padding: 1rem;
  width: 15rem;
  height: 10rem;
  position: relative;
  @media (max-width: 1000px) {
    width: 15rem;
    height: 10rem;
  }
`;

export default function HomeSlider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  ];

  useEffect(() => {
    //console.log(carousel.current.scrollWidth + carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <MainContainer ref={carousel} whileTap={{ cursor: "grabbing" }}>
      <Container
        animate={{ x: -width }}
        transition={{ duration: 16, yoyo: Infinity }}
        initial={{ x: 0 }}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {images.map((item, index) => {
          return (
            <ImageContainer
              key={index}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                key={index}
                alt="images"
                src={item}
                layout="fill"
                objectFit="contain"
                sizes="(min-width: 1768px) 100vw,
                (mim-width: 1200px) 50vw,
                33vw"
                placeholder="blur"
              />
            </ImageContainer>
          );
        })}
      </Container>
    </MainContainer>
  );
}
