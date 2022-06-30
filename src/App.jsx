import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'

import Header from './components/Header/header';
import SideBar from './components/SideBar/sidebar';
import Home from './pages/home/home';
import Login from './pages/loginregis/login';
import Register from './pages/loginregis/register';
import Transaksi from './pages/transaksi/transaksi';
import Edukasi from './pages/edukasi/edukasi';
import PenukaranPoin from './pages/penukaranpoin/penukaranpoin';
import HistoriPoin from './pages/penukaranpoin/historipoin';
import Histori from './pages/histori/histori';
import Profile from './pages/profile/profile';



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
            <Route exact path="/historipoin" element={<HistoriPoin />} />
            <Route exact path="/histori" element={<Histori />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
