import React from 'react'
import { Carousel,Form } from "react-bootstrap";

const Search = ({search,setSearch}) => {
  return (
    <div>
        <Carousel.Caption id='search' style={{zIndex:"10"}}>
        <div className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Search" 
              className="me-2"
              aria-label="Search"
              value={search} onChange={(e)=>{setSearch(e.target.value)}}
            />
            {/* <Button variant="outline-success" type="submit" className="text-white bg-success">Search</Button> */}
        </div>
      </Carousel.Caption>
    </div>
  )
}

export default Search