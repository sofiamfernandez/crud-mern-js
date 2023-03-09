import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios'
import Swal from 'sweetalert2'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/esm/Container';


export const AddUser = () => {
  
  //Hooks

  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity]   = useState('');


  //arrow function is an anonymus function
  const addUser =()=> {
    let user = {
      name: name,
      email: email,
      city: city,
      userid: uniqid()
    }
    console.log(user)

    axios.post('/api/users/create', user)
    .then(res => {
      // alert(res.data)
      Swal.fire('Congratulations!', 'The user has been created')
    })
    .then(err => {console.log(err)})
  }

  return (
    
      <>
      <h2>Create User</h2>
      <Container>
      <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3"
      >
      <Form.Control 
        type="name"
        placeholder="name@example.com"
        value={name}
        onChange={(e)=> {setName(e.target.value)}}
         />

      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
      <Form.Control 
        type="email" 
        value={email}
        onChange={(e)=> {setEmail(e.target.value)}}
        
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingId"
        label="City"
        className="mb-3"
      >
      <Form.Control 
        type="text" 
        value={city}
        onChange={(e)=> {setCity(e.target.value)}}
        
      />
      </FloatingLabel>

  
      <Button 
        variant="success" 
        type="submit"
        onClick={addUser}
        >
        Add user
      </Button>
      </Container>
   </>
  )
}
