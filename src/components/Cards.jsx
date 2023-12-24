import React from 'react'
import { Card, Container } from 'react-bootstrap';

const Cards = () => {
  return (
    <div>
        <div>
        <Card border="danger" className="mt-3" style={{ width: '18rem' , maxHeight : "350px"}}>
          <Card.Img variant="top" src="https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg" />
          <Card.Body> 
            <Card.Title>Card Title</Card.Title>
            <Card.Text>This is Card Description </Card.Text>
            <Container className="w-100">
                <select className='m-2 h-100 bg-warning rounded'>
                  {Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                <select className='m-2 h-100 bg-warning rounded'>
                  <option value="half">Half</option>
                  <option value="full">Full</option>
                </select>
                <div className='d-inline h-100 fs-5'>Total Price</div>
            </Container>
          </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default Cards;