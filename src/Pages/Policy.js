import React from 'react'
import Layout from '../components/Layout/Layout'
import Header from '../components/Layout/Header'
import estate3 from "./images/estate3.jpg";
function Policy() {
  return (
    <div>
      <Header></Header>
         <div className='contact-container'>
            <div className='contact-row1'>
                <img src={estate3} width={1100} height={300}></img>
            </div>
            <div className='contact-details'>
                <p className='mt-3'>91- 999999999</p>
                <p className='mt-3'> test@test.com</p>
                <p>91- 999999999</p>
            </div>
        </div>
    </div>
  )
}

export default Policy
