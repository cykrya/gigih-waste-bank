import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'

import Header from './components/Header/header';
import SideBar from './components/SideBar/sidebar';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Transaksi from './pages/transaksi';
import Edukasi from './pages/edukasi';
import PenukaranPoin from './pages/penukaranpoin';
import Histori from './pages/histori';
import Profile from './pages/profile'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <div className="main-container">
          <SideBar />
          <Routes>
            <Route exact path="/home" element={<Home />} />
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
  );
}

export default App;
