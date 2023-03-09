import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from './User';

export const UsersList = () => {

  const [userdata, setUserdata] = useState(['']);

  useEffect(() => {
    axios.get('api/users/user').then(res=>{
      console.log(res.data)
      setUserdata(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  //Mapping users list in an user object
  const userlist = userdata.map(user => {
  return(
        <User user={user} />
  ) 
  })

  return (
    <div>
        <h2>Users List ok</h2>
        {userlist}
    </div>
  )
}
