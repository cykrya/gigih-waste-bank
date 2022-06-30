import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'

import Header from './components/Header/header';
import SideBar from './components/SideBar/sidebar';
import Home from './pages/home/home';
import Login from './pages/loginregis/login';
import Register from './pages/loginregis/register';
import Transaksi from './pages/transaksi/transaksi';
import Edukasi from './pages/edukasi/Edukasi';
import PenukaranPoin from './pages/penukaranpoin/penukaranpoin';
import Histori from './pages/histori/histori';
import Profile from './pages/profile/profile';
import A1 from './pages/edukasi/edukasiPage/A1';
import A2 from './pages/edukasi/edukasiPage/A2';
import A3 from './pages/edukasi/edukasiPage/A3';
import Editprofile from './pages/editprofile';

const App = () => {
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
            <Route exact path="/transaksi" element={<Transaksi />} />
            <Route exact path="/edukasi" element={<Edukasi />} />
            <Route exact path="/penukaranpoin" element={<PenukaranPoin />} />
            <Route exact path="/histori" element={<Histori />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/Aone" element={<A1/>} />
            <Route exact path="/Atwo" element={<A2/>} />
            <Route exact path="/Athree" element={<A3/>} />
            <Route exact path="/editprofile" element={<Editprofile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
