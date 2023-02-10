import Head from 'next/head'
import React,{Fragment} from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = ({children}) => {
  return (
    <Fragment>
      <Head>
        <title>Satyabrata Dash | Portfolio</title>
      </Head>
        <Header/>
        {children}
        <Footer/>
    </Fragment>
  )
}

export default Layout