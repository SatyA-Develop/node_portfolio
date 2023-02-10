import About from "@/components/UI/About";
import Contact from "@/components/UI/Contact";
import Hero from "@/components/UI/Hero";
import Portfolio from "@/components/UI/Portfolio";
import Services from "@/components/UI/Services";
import Testimonials from "@/components/UI/Testimonials";
import { Fragment } from "react";


export default function Home() {
  return (
  <Fragment>
    <Hero/>
    <Services/>
    <About/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
  </Fragment>
      
  )
}
