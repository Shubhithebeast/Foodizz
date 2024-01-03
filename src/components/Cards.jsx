import React from 'react'
import { Button, Card, Container } from 'react-bootstrap';

const Cards = (props) => {
  let options = props.options;
  let priceOptions = Object.keys(options);

  const handleAddToCart = () =>{

  }

  return (
    <div>
        <div>
        <Card border="danger" className="mt-3" style={{ width: '20rem' , maxHeight : "400px"}}>
          <Card.Img variant="top" src={props.imgSrc} style={{height:"230px",objectFit:"fill"}} />
          <Card.Body> 
            <Card.Title >{props.foodName}</Card.Title>
            
            <Container className="w-100">
                <select className='m-2 h-100 bg-warning rounded'>
                  {Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                <select className='m-2 h-100 bg-warning rounded'>
                 {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                 })}
                </select>
                <div className='d-inline h-100 fs-5'>Total Price</div>
                <hr />
                <Button className='bg-success ms-2' onclick={handleAddToCart}>Add to Cart</Button>
            </Container>
          </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default Cards;