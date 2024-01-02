import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';


const Login = () => {
  const [credentials, setcredentials] = useState({
    email:"",password:""
  });

  let navigate = useNavigate();

  const handleSubmit = async(e) =>{
    
    e.preventDefault(); // prevents the default click behavior
    
    try{ 
        const response = await fetch("http://localhost:5000/api/loginuser",{
          method:"POST",
          headers:{     
            'Content-Type':'application/json'
          },
          body: JSON.stringify({email:credentials.email, password:credentials.password})
        });
          
    
        const jsonData = await response.json();
    
        if(!jsonData.success){
          alert("Login Crendentials galat hai bhai🙄...");
        }else{
          console.log("Login hogya bhai ✨...");
          console.log(credentials);
          navigate("/"); 
        } 

    }catch(error){
      console.log("Error aara h form Login krne mai😐...");
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

            <Button variant="success" className="m-1" type="submit">
                Submit
            </Button>
            <Link className="m-3 btn btn-danger" to='/createuser'> I'm a new User</Link>
        </Form>
    </div>
    </>
  )
}

export default Login;

