import React from 'react'
import {useNavigate, useParams} from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Button, Form, Container, FloatingLabel} from 'react-bootstrap'
import Swal from 'sweetalert2'

export const EditUser = () => {

  const params = useParams()

    //Hooks

    const [name, setName]   = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity]   = useState('');

    //To come back 

    const navigate = useNavigate()
  
    useEffect(()=>{
      axios.post('/api/users/getuserdata', {userid: params.userid}).then(res => {console.log(res.data[0])
        const userdata = res.data[0];
        setName(userdata.name)
        setEmail(userdata.email)
        setCity(userdata.city)
      
      })
    }, [params.userid])

    //Function updating
    const editUser=()=>{
      //New object to update user
      const updateUser ={
        name: name,
        email: email,
        city: city,
        userid: params.userid
      }
      //Request with axios
      axios.post('/api/users/updateuserdata', updateUser)
      .then(res => {
        console.log(res.data)
        // alert(res.data)
        Swal.fire('Congratulations!', 'The user has been edited')
        navigate('/')
      })
      .then(err => {console.log(err)})
    }

  return (
  
    <Container>
       <h2>Edit User</h2>
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
      onClick={editUser}
      >
      Edit user
    </Button>
    </Container>

    
  )
}
