import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import Carousel from '../components/Carousel';

const Home =()=> {
  return (
    <>
        <div><Navbar/></div>
        <div><Carousel/></div>
        <div className='m-4'>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
        <div><Footer/></div>
    </>
  )
}
export default Home;