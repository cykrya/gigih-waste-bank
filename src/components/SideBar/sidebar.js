import "./sidebar.css";
import { Link } from "react-router-dom";
import  { useEffect } from "react";
import { useSelector } from 'react-redux';

export default function SideBar() {
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
  <div className="sidebar">
  <ul className="sidebar-list">
    <Link to="/transaksi">
      <li className="lists">Transaksi</li>
    </Link>
    <Link to="/edukasi">
      <li className="lists">Edukasi Pengolahan Sampah</li>
    </Link>
    <Link to="/penukaranpoin">
      <li className="lists">Penukaran Poin</li>
    </Link>
    <Link to="/histori">
      <li className="lists">Histori Transaksi</li>
    </Link>
  </ul>
</div>
);
}

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <Link to="/login">
          <li className="lists">Transaksi</li>
        </Link>
        <Link to="/edukasi">
          <li className="lists">Edukasi Pengolahan Sampah</li>
        </Link>
        <Link to="/login">
          <li className="lists">Penukaran Poin</li>
        </Link>
        <Link to="/login">
          <li className="lists">Histori Transaksi</li>
        </Link>
      </ul>
    </div>
  );
}
