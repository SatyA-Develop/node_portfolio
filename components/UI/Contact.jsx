import React from "react";
import classes from "../../styles/contact.module.css";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import Link from "next/link";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              reprehenderit deserunt perferendis dolorum, sint labore est illum
              veritatis unde, alias exercitationem. Et doloremque aliquam
              delectus dignissimos eveniet iure molestias possimus aut, natus
              aperiam nostrum nesciunt maiores veniam fugiat beatae sint.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Jajpur - India</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>satyabratadash915@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+917468563886</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-twitter-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
