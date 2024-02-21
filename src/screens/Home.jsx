import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

import { Carousel} from "react-bootstrap";
import Search from "../components/Search";

const Home =()=> {

  const [search,setSearch] = useState('');
  const [foodCat,setFoodCat] = useState([]);
  const [foodItem,setFoodItem] = useState([]);

  const loadData = async () =>{
    let response = await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      }
    })
 
    response = await response.json();
    // console.log(response[0],response[1]);

    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() =>{
    loadData();
    // it will call whenever page load ,only once
  },[])
  // loadData will will call without dependices [] 

  return (
    <>
        <div><Navbar/></div>
        
        <div>
      <Carousel fade id="carousel" style={{objectFit:"contain !important"}} className="carousel-fade" indicators={false} controls={false}>

      <Carousel.Item interval={2000}>
        <Search setSearch={setSearch}/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?idli"
          alt="First slide"
          style={{filter:"brightness(50%)"}}
        />
       
      </Carousel.Item>

      <Carousel.Item interval={2000}>
       <Search setSearch={setSearch} search={search}/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?manchurian"
          alt="First slide"
          style={{filter:"brightness(50%)"}}
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Search setSearch={setSearch} search={search}/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?burger"
          alt="First slide"
          style={{filter:"brightness(50%)"}}
        />
       
      </Carousel.Item>
      <Carousel.Item  interval={2000}>
       <Search setSearch={setSearch} search={search}/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?sandwitch" 
          alt="First slide"
          style={{filter:"brightness(50%)"}}
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
       <Search setSearch={setSearch} search={search}/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?fries"
          alt="First slide"
          style={{filter:"brightness(50%)"}}
        />
       
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Search setSearch={setSearch} search={search}/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?momos"
          alt="Second slide"
          style={{filter:"brightness(50%)"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Search setSearch={setSearch} search={search}/>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/980x400?springroll"
          alt="Third slide"
          style={{filter:"brightness(50%)"}}
        />
    
      </Carousel.Item>
    </Carousel>

    </div>

        <div className='container'>
          {
            (foodCat.length!==0) ? foodCat.map((data) => {
              return( 
                <div className='row mb-3'>
                  <div key={data._id} className='fs-1 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr />
                  {(foodItem.length!==0) ? foodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())) )
                  .map(filterItems=>{
                    return(
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Cards foodItem={filterItems}
                          options={filterItems.options[0]}
                          
                           />
                      </div>
                    )
                  }): <div>No such data</div>}
                </div>
              )
            }) :  ""
          }
            
      
        </div>
        <div><Footer/></div>
    </>
  )
}
export default Home;