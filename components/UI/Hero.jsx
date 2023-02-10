import React from "react";
import classes from "../../styles/hero.module.css";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Image from "next/image";
import HeroImg from "../../public/image/hero.jpg";
import SectionSubtitle from "./SectionSubtitle";

const Hero = () => {
  return (
    <section id="home" className={`${classes.hero}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className= " d-flex  gap-3 mb-3 mt-3">I&apos;m <div className={classes.main__heading} ><div><span>S</span><span>a</span><span>t</span><span>y</span><span>a</span><span>b</span><span>r</span><span>a</span><span>t</span><span>a</span></div> <div><span>D</span><span>a</span><span>s</span><span>h</span></div></div></h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quasi saepe porro, tempora eum dolore quod cupiditate tempore
                quidem earum!
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Hire me</Link>
                </button>
                <button className="secondary__btn">
                  <Link href="#">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image src={HeroImg} alt="hero-image" width="400" height="400" />
              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div className={`${classes.hero__experience} d-flex align-items-center gap-3`}>
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">1 Year</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;


