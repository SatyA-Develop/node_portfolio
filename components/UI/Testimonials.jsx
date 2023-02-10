import React from "react";
import classes from "../../styles/testimonials.module.css";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import network from "../../public/image/Connected world.png";
import SectionSubtitle from "./SectionSubtitle";
import Slider from "react-slick";

const Testimonials = () => {
  const Client = [
    {
      avtar: "/image/hero.jpg",
      name: "John Deo",
      designation: "Software Developer",
      comnt:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque cupiditate obcaecati dolores iste ea pariatur, deleniti nostrum sapiente laborum debitis ducimus sunt rem vero enim minus. Ea ipsum, quam molestias culpa quisquam necessitatibus deserunt, blanditiis nisi ullam fuga voluptatum.",
    },
    {
      avtar: "/image/hero.jpg",
      name: "Sukun Sandua",
      designation: "Web Developer",
      comnt:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque cupiditate obcaecati dolores iste ea pariatur, deleniti nostrum sapiente laborum debitis ducimus sunt rem vero enim minus. Ea ipsum, quam molestias culpa quisquam necessitatibus deserunt, blanditiis nisi ullam fuga voluptatum.",
    },
    {
      avtar: "/image/hero.jpg",
      name: "Takun Tiku",
      designation: "App Developer",
      comnt:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque cupiditate obcaecati dolores iste ea pariatur, deleniti nostrum sapiente laborum debitis ducimus sunt rem vero enim minus. Ea ipsum, quam molestias culpa quisquam necessitatibus deserunt, blanditiis nisi ullam fuga voluptatum.",
    },
    {
      avtar: "/image/hero.jpg",
      name: "Lorem Tisuza",
      designation: "Software Engineer",
      comnt:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cumque cupiditate obcaecati dolores iste ea pariatur, deleniti nostrum sapiente laborum debitis ducimus sunt rem vero enim minus. Ea ipsum, quam molestias culpa quisquam necessitatibus deserunt, blanditiis nisi ullam fuga voluptatum.",
    },
  ];
  const settings = {
    dots: false,
    // speed: 0000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    infinity: true,
    swipeToSlide: true,
  };
  return (
    <section id="testimonials">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <Image alt="networl-image" src={network} width="400" height="400" />
          </Col>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              {Client.map(({ avtar, comnt, name, designation }) => {
                return (
                  <div className={`${classes.testimonial__item}`}>
                    <div className={`${classes.testimonial__client}`}>
                      <Image
                        alt="client-img"
                        src={avtar}
                        width="50"
                        height="50"
                        className="rounded-2"
                      />
                      <div>
                        <h6>{name}</h6>
                        <h6>{designation}</h6>
                      </div>
                    </div>
                    <p>{comnt}</p>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
