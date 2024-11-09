import React from 'react'
import Layout from '../components/Layout/Layout'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

function About() {
  return (
    <div>
      <Header></Header>
         <div className='contact-container  bg-info bg-opacity-10'>
          <div className='contact-row1 row'>
          <img src='/images/about.jpg'  height={201}></img>
          <h3 className='mt-2 text-center bg-info bg-opacity-10' >About UrbanNest</h3>
            <div className='contact-details col-md-12'>
                <p className='mt-3 card p-3 border-info'> Dear Users,
                ewtytrufdsfgjhkghedgfhhfdsdfghjywqerfdg  <br/>
               </p>
            </div>
          </div>
          
        </div>
        <Footer></Footer>
    </div>
  )
}

export default About
