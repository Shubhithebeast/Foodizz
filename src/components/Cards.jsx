import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatchCart,useCart } from './ContextReducer';

const Cards = (props) => {

  let dispatch = useDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let data = useCart()
  const priceRef = useRef();
  
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () =>{
    await dispatch({
      type:"Add", id:props.foodItem._id, name: props.foodItem.name,
      price:finalPrice, qty:qty , size:size 
    })

    await console.log(data);
  }
  let finalPrice = qty*parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, [])
  

  return (
    <div>
        <div>
        <Card border="danger" className="mt-3" style={{ width: '20rem' , maxHeight : "400px"}}>
          <Card.Img variant="top" src={props.foodItem.img} style={{height:"230px",objectFit:"fill"}} />
          <Card.Body> 
            <Card.Title >{props.foodItem.name}</Card.Title>
            
            <Container className="w-100">
                <select className='m-2 h-100 bg-warning rounded' onChange={(e)=>setQty(e.target.value)}>
                  {Array.from(Array(6),(e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                <select className='m-2 h-100 bg-warning rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                 {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                 })}
                </select>
                <div className='d-inline h-100 fs-5'>₹{finalPrice}/-</div>
                <hr />
                <Button className='bg-success ms-2' onClick={handleAddToCart}>Add to Cart</Button>
            </Container>   
          </Card.Body>
        </Card>
        </div>
    </div>
  )
}

export default Cards;