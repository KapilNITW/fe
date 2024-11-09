import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet"

import { Toaster } from 'react-hot-toast'
function Layout(props) {
  return (
    <div>
       <Helmet>
              <meta charSet="utf-8" />
              <meta name="description" content={props.description}/>
              <meta name="keywords" content={props.keywords} />
              <meta name="author" content={props.author} />
          
         <title>{props.title}</title>
               
         </Helmet>
        <Header />
        <main style={{minHeight:'78vh'}} className=''>
          <Toaster />
        {props.children}
        </main>
      
      <Footer />
    </div>
  )
}

Layout.defaultProps={
  title:'Urban-Residential-Estate-App',
  description:'Mern Stack Project',
  keywords:'mern,react,nodejs,mongoDB',
  author:'Kapil'
}
export default Layout