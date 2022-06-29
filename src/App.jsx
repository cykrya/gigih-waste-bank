import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import  { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Header from './components/Header/header';
import SideBar from './components/SideBar/sidebar';
import Home from './pages/home/home';
import Login from './pages/loginregis/login';
import Register from './pages/loginregis/register';
import Transaksi from './pages/transaksi/transaksi';
import Edukasi from './pages/edukasi/edukasi';
import PenukaranPoin from './pages/penukaranpoin/penukaranpoin';
import Histori from './pages/histori/histori';
import Profile from './pages/profile/profile';


export default function App() {
  const test1=((useSelector((state)=>state.profile)).email);
  const test2=((useSelector((state)=>state.profile)).hadLogin);
  
  const test3=((useSelector((state)=>state.profile)).nama);

  useEffect (()=>{
    console.log("nama akun: "+test1);
    console.log("nama user: "+test3);
    console.log("sudah log in?: "+test2);
  });

  if(test2){ 
    return (
      <>
       <div className="App">
      <Router>
      <Header />
        <div className="main-container">
          <SideBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/transaksi" element={<Transaksi />} />
            <Route exact path="/edukasi" element={<Edukasi />} />
            <Route exact path="/penukaranpoin" element={<PenukaranPoin />} />
            <Route exact path="/histori" element={<Histori />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
    </>
  );
  }

  return (
    <div className="App">
   <Router>
   <Header />
     <div className="main-container">
     <SideBar />
       <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/transaksi" element={<Login />} />
            <Route exact path="/edukasi" element={<Edukasi />} />
            <Route exact path="/penukaranpoin" element={<Login />} />
            <Route exact path="/histori" element={<Login />} />
            <Route exact path="/profile" element={<Login />} />
       </Routes>
     </div>
   </Router>
 </div>
  )
}

     


