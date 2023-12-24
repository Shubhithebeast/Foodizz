import React from 'react'
import { Carousel,Form,Button } from "react-bootstrap";

const Search = () => {
  return (
    <div>
        <Carousel.Caption id='search' style={{zIndex:"10"}}>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit" className="text-white bg-success">Search</Button>
        </Form>
      </Carousel.Caption>
    </div>
  )
}

export default Search