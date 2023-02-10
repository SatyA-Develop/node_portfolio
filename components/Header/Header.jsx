import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import classes from './header.module.css'
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

const Header = () => {


  const headerRef = useRef(null)
  const MenuRef = useRef(null)


  const headerFun=()=>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      headerRef.current.classList.add(`${classes.header__shrink}`)
    }else{
      headerRef.current.classList.remove(`${classes.header__shrink}`)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", headerFun)
    return()=> window.removeEventListener("scroll", headerFun)
  },[])

const toggleMenu=()=> MenuRef.current.classList.toggle(`${classes.menu__active}`)


  return (
    <header className={`${classes.header}`} ref={headerRef}>
<Container>
   <div className={`${classes.nav__wrapper}`}>
     <div className={`${classes.logo}`}>
<h1><span>S</span>atyabrata</h1>
     </div>
     <div className={`${classes.navigation}`} ref={MenuRef} onClick={toggleMenu}>
        <div className={`${classes.nav__menu}`}>
         {
            NAV_LINK.map(({display,path,id})=>(
               <Link to={`${path}`} key={id}><li onClick={toggleMenu}>{display}</li></Link>
            ))
         }
<div className={`${classes.nav__right}`}>
    <p className='d-flex align-items-center gap-2 mb-0'><i className="ri-phone-line"></i> +917684684633</p>
</div>
        </div>
     </div>
   <span className={`${classes.mobile__menu}`}> <i className="ri-menu-fold-line"  onClick={toggleMenu}></i></span>
   </div>
</Container>
    </header>
  )
}

export default Header