import React, { useEffect, useState } from 'react'
import Login from './components/Login'

export default function AccountLogin() {

    const [message, setMessage] = useState('')
    const callbackFunction = (childData) => {
        setMessage(childData)
      }
      console.log(message)
   // console.log(Login.userID)
  const {account, setAccount} = useState({
    _id: "",
    email: "",
    name: "",
    password: "",
    imgUser: "",
    age: "",
  })
  return (
    <div>
      <Login parentCallback={callbackFunction}/>
      
    </div>
  );
}
