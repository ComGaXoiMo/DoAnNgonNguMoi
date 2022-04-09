import React, { useEffect, useState } from 'react'
import Login from './components/Login'

export default function AccountLogin() {

    
    console.log(Login.userID)
  const {account, setAccount} = useState({
    _id: "",
    email: "",
    name: "",
    password: "",
    imgUser: "",
    age: "",
  })
}
