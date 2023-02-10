import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import classes from '../../styles/services.module.css'
import SectionSubtitle from './SectionSubtitle'
import ServicesItem from './ServicesItem'

const Services = () => {
  return (
    <section id='services'>
        <Container>
<Row>
<Col lg='6' md='6' className='d-flex justify-content-center '>
   <div className={`${classes.services__container}`}>
     <div>
        <ServicesItem title="Frontend Development" icon='ri-computer-line' />
     
       <ServicesItem title="Frontend Development" icon='ri-computer-line' />
     </div>
     <div>
        <ServicesItem title="Frontend Development" icon='ri-computer-line' />
     </div>

   </div>
</Col>
<Col lg='6' md='6' className={`${classes.service__title}`}>
<SectionSubtitle subtitle="What I do" />
<h3 className='mb-0 mt-4'>Better Design,</h3>
<h3 className='mb-4'>Better Experience,</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum inventore tenetur debitis nam voluptatem assumenda reprehenderit sed quia culpa sunt quos voluptate quis harum porro facere possimus, molestias quibusdam totam cupiditate illum maiores! Error ducimus atque facilis, magnam iste expedita.</p>
</Col>
</Row>
        </Container>
    </section>
  )
}

export default Services