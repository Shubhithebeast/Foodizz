import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

const MyNavbar = () => {
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
            <Nav.Link  active href="/myOrder">My Orders</Nav.Link> : ""

            }
          </Nav>
          <Nav>
          {(!localStorage.getItem("authToken")) ?
          <div className='d-flex'>
              <Nav.Link className="btn text-white bg-success " href="/login">Login</Nav.Link>
              <Nav.Link className="btn text-white bg-success mx-4" href="/createuser">SignUp</Nav.Link>
            </div> : 
            <div>
            <div className="btn text-white bg-success " >
              MyCart
            </div>

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