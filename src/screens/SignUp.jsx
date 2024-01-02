import React,{useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const SignUp = () => {

  const [credentials, setcredentials] = useState({
    name:"",email:"",password:"",location:""
  });

  const handleSubmit = async(e) =>{
    // alert('Sign Up Successful!'); 
    // preDefault is synthetic event
    // Synthetic events in React provide a consistent interface across different browsers. They have properties and methods similar to native DOM events.
    e.preventDefault(); // prevents the default click behavior
    
    try{
        const response = await fetch("http://localhost:5000/api/createuser",{
          method:"POST",
          headers:{     
            'Content-Type':'application/json'
          },
          body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.location})
        });
          
    
        const jsonData = await response.json();
    
        if(!jsonData.success){
          alert("Dhaang se Crendentials daal bhai🙄...");
        }else{
          console.log("Form ka data submitted hogya bhai ✨...");
          console.log(credentials);
        } 

    }catch(error){
      console.log("Error aara h form Submit krne mai😐...");
    }
  }

  const onChange = (event) =>{
    // updating the crendentials, which r given by user
    setcredentials({...credentials,[event.target.name]:event.target.value});
  }
  
  return (
    <>
    <div className='container'>
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" placeholder="Username" name="name" value={credentials.name} onChange={onChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={credentials.email} onChange={onChange}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={credentials.password} onChange={onChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text"  name="location" value={credentials.location} onChange={onChange}/>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Button variant="success" className="m-1" type="submit">
                Submit
            </Button>
            <Link className="m-3 btn btn-danger" to='/login'> Already a User </Link>
        </Form>
    </div>
    </>
  )
}

export default SignUp;