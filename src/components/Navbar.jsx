import React,{useState} from 'react';
import { Navbar, Nav, Badge} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Cart from '../screens/Cart';
import Modal from '../modal'
import { useCart } from './ContextReducer';

const MyNavbar = () => {
  let data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout =()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
        
          <Navbar.Brand className="fs-1 fst-italic ms-5" href="/" >Foodizz</Navbar.Brand>
         
          <Nav className='fs-5 me-auto ms-3'>
            <Nav.Link  active href="/">Home</Nav.Link>
            {(localStorage.getItem("authToken")) ?
            <Nav.Link  active href="/myorder">My Orders</Nav.Link> : ""

            }
          </Nav>
          <Nav>
          {(!localStorage.getItem("authToken")) ?
          <div className='d-flex'>
              <Nav.Link className="btn text-white bg-success " href="/login">Login</Nav.Link>
              <Nav.Link className="btn text-white bg-success mx-4" href="/createuser">SignUp</Nav.Link>
            </div> : 
            <div>  
            <div className="btn text-white bg-success " onClick={()=>setCartView(true)} >
              MyCart {""}
              <Badge pill bg='danger'>{data.length}</Badge>
            </div> 
            {cartView ? <Modal onClose={()=> setCartView(false)}> <Cart/> </Modal> :null}

              <div className="btn text-white bg-danger mx-4" onClick={handleLogout}>
                Logout
              </div> 
            </div>

          }
          </Nav>
      </Navbar>
      
    </>
  )
}

export default MyNavbar;