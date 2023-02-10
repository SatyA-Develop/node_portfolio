import React from "react";
import classes from "../../styles/about.module.css";
import { Container, Row, Col } from "reactstrap";
import Img1 from "../../public/image/img-01.jpg";
import Img2 from "../../public/image/img-02.jpg";
import Img3 from "../../public/image/img-03.jpg";
import Img4 from "../../public/image/hero.jpg";
import SectionSubtitle from "./SectionSubtitle";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__title}`} >
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4 ">I&apos;m here</h3>
            <h3 className="mb-4">to help you in your planned project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              temporibus eum voluptatum aliquid quo totam mollitia aliquam
              voluptate tempore commodi nemo nesciunt dicta veritatis doloribus
              iusto, perspiciatis explicabo eius nobis quas dolore. In nesciunt,
              eligendi minus totam nihil animi pariatur.
            </p>

            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>
                <h6 className="d-flex align-items-center gap-2 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>
              <div className="d-flex align-items-center gap-5">
                <div>
                  <h6 className="d-flex align-items-center gap-2 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Creative Ideas
                  </h6>
                  <h6 className="d-flex align-items-center gap-2 fw-normal">
                    <span className={`${classes.about__icon}`}>
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                    Quality Service
                  </h6>
                </div>
              </div>
            </div>
            <div className="mt-5">
                <button className="primary__btn">
                    <Link href="#portfolio">My Portfolio</Link>
                </button>
                <button className="secondary__btn">
                    <Link href="#">Download CV</Link>
                </button>
            </div>
          </Col>
          <Col lg='6' >
            <div className= {`${classes.about__img__gallery} d-flex gap-4 justify-content-end`} >
                <div className="d-flex flex-column mb-3">
                    <div className={`${classes.about__img} ${classes.about__img__box}`}>
                      <Image src={Img1} alt='about-image' height='150' />
                    </div>
                    <div className={`${classes.about__img} ${classes.about__img__box}`}>
                      <Image src={Img2} alt='about-image' height='250' />
                    </div>
                </div>
                <div className="d-flex flex-column mb-3">
                    <div className={`${classes.about__img} ${classes.about__img__box}`}>
                      <Image src={Img3} alt='about-image' height='250' />
                    </div>
                    <div className={`${classes.about__img} ${classes.about__img__box}`}>
                      <Image src={Img4} alt='about-image' height='180' />
                    </div>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
