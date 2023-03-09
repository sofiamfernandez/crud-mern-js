import React, { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import Swal from 'sweetalert2';
// import Link from 'react'


export const User = ({user}) => {

  const navigate = useNavigate()

  //animations scroll
  useEffect(() => {
    AOS.init()
  }, [])

 //Delete function
 function deleteUser(userid){
  axios.post('/api/users/deleteuser', {userid:userid}).then(res=> {
    console.log(res.data)
    Swal.fire('The user has been deleted')
    navigate(0)
  }).catch(err => {
    console.log(err)
  })
 }

 


  return (
    
      <Container>
        <Row >
          <Col sm={6} >
            <ListGroup data-aos='flip-right'>
              <ListGroup.Item >{user.userid}</ListGroup.Item>
              <ListGroup.Item>{user.name}</ListGroup.Item>
              <ListGroup.Item>{user.email}</ListGroup.Item>
              <ListGroup.Item>{user.city}</ListGroup.Item>
            </ListGroup>

            <Link to={`/edit/${user.userid}`}><li className='btn outline-success' >Edit </li>{' '}</Link>
            
            <Button variant="outline-danger" onClick={()=>{deleteUser(user.userid)}}>Delete</Button>{' '}
            <hr className='mt-3'/>
          </Col>
      </Row>
      </Container>
    
  )
}
