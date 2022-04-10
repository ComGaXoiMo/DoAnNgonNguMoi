import React, { Component } from 'react'
import '../assets/app.js'
import '../assets/app.css'
import '../assets/grid.css';
import Login from './Login';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function Home() {

  console.log(localStorage.getItem('idLg'))
  console.log(localStorage.getItem('isLg'))
  return (
    <div>
      <Header userID={localStorage.getItem('idLg')} isLogin={localStorage.getItem("isLg")} />
      <Body />
      <Footer />
    </div>
  );

}

export default Home;
