import "./header.css";
import { Link } from "react-router-dom";
import  { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Header() {
  const test1=((useSelector((state)=>state.profile)).emailNotelp);
  const test2=((useSelector((state)=>state.profile)).password);
  const test3=((useSelector((state)=>state.profile)).nama);
  const test4=((useSelector((state)=>state.profile)).umur);
  const test5=((useSelector((state)=>state.profile)).alamat);
  const test6=((useSelector((state)=>state.profile)).jeniskel);

  useEffect (()=>{
    console.log("nama akun: "+test1);
    console.log("nama password: "+test2);
    console.log("nama user: "+test3);
    console.log("umur: "+test4);
    console.log("nama alamat: "+test5);
    console.log("jenis kelamin: "+test6);

  });

  if(test1){

    return (
      <>
        <header className="header-wrapper">
          <Link to="/home">
            <img src="/gwblogo.png" alt="Logo" />
          </Link>
          <div className="navigation login">
            <Link to="/profile">
              {/* <headerLogin name={test3}/> */}

              <p className="profileName">
                <span><AccountCircleIcon  sx={{  color: 'grey',fontSize: 40, }}/></span>
                <span className="nameInside">{test3}</span>
              </p>
            </Link>
          </div>
        </header>
      </>
    );

  }

  return (
    <header className="header-wrapper">
      <Link to="/home">
        <img src="/gwblogo.png" alt="Logo" />
      </Link>
      <div className="navigation">
        <Link to="/login">
          <p>Masuk</p>
        </Link>
      </div>
    </header>
  )
}
