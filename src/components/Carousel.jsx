import React from "react";
import { Carousel} from "react-bootstrap";
import Search from "./Search";


const MyCarousel = () => {
  return (
    <div>
      <Carousel fade id="carousel" style={{objectFit:"contain !important"}} className="carousel-fade" indicators={false} controls={false}>

      <Carousel.Item interval={2000}>
        <Search/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?idli"
          alt="First slide"
          style={{filter:"brightness(50%)"}}
        />
       
      </Carousel.Item>

      <Carousel.Item interval={2000}>
       <Search/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?manchurian"
          alt="First slide"
          style={{filter:"brightness(50%)"}}
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Search/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?burger"
          alt="First slide"
          style={{filter:"brightness(50%)"}}
        />
       
      </Carousel.Item>
      <Carousel.Item  interval={2000}>
       <Search/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?sandwitch" 
          alt="First slide"
          style={{filter:"brightness(50%)"}}
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
       <Search/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?fries"
          alt="First slide"
          style={{filter:"brightness(50%)"}}
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Search/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?momos"
          alt="Second slide"
          style={{filter:"brightness(50%)"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Search/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?springroll"
          alt="Third slide"
          style={{filter:"brightness(50%)"}}
        />
    
      </Carousel.Item>
    </Carousel>

    </div>
  );
};

export default MyCarousel;




