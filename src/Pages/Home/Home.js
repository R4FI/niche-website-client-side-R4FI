import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import canon from '../../Images/cannon6D.png';
import sony from '../../Images/sony.png';
import video from '../../Images/video.png';
import './Home.css';
import { Button } from 'react-bootstrap';
import Products from '../Products/Products';
import Offer from '../Offer/Offer';
import { NavLink } from 'react-router-dom';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="sticky">
            {/* carousel 1st item */}
            <Container className="bg-secondary"> 
            <Carousel className="mt-4">
  <Carousel.Item>
      <Row className="d-flex justify-content-center align-items-center">
          <Col md={6}>
    <img
      className="d-block w-100"
      src={canon} 
      alt="First slide"
    />
    </Col>
    <Col className="text-white" md={6}>
            <h2>Capture Your</h2> 
            <h2>Beautiful Moment</h2>
           <NavLink to="/product"> <Button variant="outline-info">Explore</Button> </NavLink>
    </Col>
    </Row>
  </Carousel.Item>

  {/* carousel 2nd item */}
  <Carousel.Item>
  <Row className="d-flex justify-content-center align-items-center">

  <Col className="text-white" md={6}>
            <h2>Capture Your</h2> 
            <h2>Beautiful Moment</h2>
            <NavLink to="/product"> <Button variant="outline-info">Explore</Button> </NavLink>
    </Col>

    <Col md={6}>
    <img
      className="d-block w-100"
      src={sony}
      alt="Second slide"
    />
        </Col>

        </Row>
  </Carousel.Item>

        {/* third item */}
  <Carousel.Item>

  <Row className="d-flex justify-content-center align-items-center">
  <Col className="text-white" md={6}>

            <h2>Capture Your</h2> 
            <h2>Beautiful Moment</h2>
            <NavLink to="/product"> <Button variant="outline-info">Explore</Button> </NavLink>

       </Col>
       <Col md={6}>
    <img
      className="d-block w-100"
      src={video}
      alt="Third slide"
    />

    </Col>
    </Row>
  </Carousel.Item>
</Carousel>
</Container>
          <Offer></Offer>
          <Review></Review> 
          <Products></Products>
        </div>
    );
};

export default Home;