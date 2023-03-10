import React,{useEffect, useState} from 'react'
import classes from '../../styles/portfolio.module.css'
import { Container,Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import PortfolioItem from './PortfolioItem'
import portfolio from '../data/portfolio'

const Portfolio = () => {
  const[filter,setFilter] = useState('Mobile App')
  const[data, setData] = useState()
  const active = `${classes.tab__btn__active}`

  useEffect(()=>{
       if( filter === 'Mobile App'){
        const filteredData = portfolio.filter(
          (item)=> item.category === filter
        )
        setData(filteredData)
       }
       if( filter === 'Web Design'){
        const filteredData = portfolio.filter(
          (item)=> item.category === filter
        )
        setData(filteredData)
       }
  },[filter])

  return (
    <section id='portfolio'>
     <Container>
      <Row>
        <Col lg='6' md='6' className='mb-5'>
        <SectionSubtitle subtitle='My portfolio' />
        <h4 className='mt-4'>Some of my distinguished works</h4>
        </Col>
        <Col lg='6' md='6' className={`${classes.tab__btns}`}>
        <div className=' text-end'>
          <button className={` ${filter === "Mobile App" ? active : ""}  secondary__btn text-white`} onClick={()=> setFilter("Mobile App")}>Mobile App</button>
          <button className={` ${filter === "Web Design" ? active : ""}   secondary__btn text-white`} onClick={()=> setFilter("Web Design")} >Web Designs</button>
        </div>
        </Col>

        {
          data ?.map(item=>(
            <Col lg='4' md='4' key={item.id} >
           <PortfolioItem item={item}/>
            </Col>
          ))
        }
      </Row>
     </Container>
    </section>
  )
}

export default Portfolio