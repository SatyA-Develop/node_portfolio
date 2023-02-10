import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import classes from './footer.module.css'
// import Link from 'next/link'
import { Link } from 'react-scroll'

const NAV_LINK = [
  {
    id: 1,
    path: 'home',
    display: 'Home'
  },
  {
    id: 2,
    path: 'about',
    display: 'About'
  },
  {
    id: 3,
    path: 'services',
    display: 'Services'
  },
  {
    id: 4,
    path: 'portfolio',
    display: 'Portfolio'
  },
  {
    id: 5,
    path: 'contact',
    display: 'Contact'
  },
]

const Footer = () => {
  const date = new Date()
  const Year = date.getFullYear()
  return (
    <footer>
      <Container>
        <Row>
          <Col lg='6'>
          <div className={`${classes.nav__menu}`}>
         {
            NAV_LINK.map(({display,path,id})=>(
               <Link to={`${path}`} key={id}><li>{display}</li></Link>
            ))
         }
        </div>
          </Col>
          <Col lg="6">
            <div className={`${classes.footer__creator}`}>
              <h6>Created by Satyabrata</h6>
            </div>
          </Col>
          <Col lg='12'>
            <div className={`${classes.footer__copyright}`}>
              <p>&copy; Copyright {Year} - Developed by Satyabrata Dash.All right reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer