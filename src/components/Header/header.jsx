import "./header.css";
import { Link } from "react-router-dom";
import  { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Header() {
  // const test1=((useSelector((state)=>state.profile)).email);
  // const test2=((useSelector((state)=>state.profile)).hadLogin);
  // const test3=((useSelector((state)=>state.profile)).nama);
  const data =useSelector((state) => state.profile);

  // useEffect (()=>{
  //   console.log("nama akun: "+test1);
  //   console.log("nama user: "+test3);
  //   console.log("sudah log in?: "+test2);
  // });

  if(data.hadLogin){ 
    return (
      <>
        <header className="header-wrapper">
          <Link to="/">
            <img src="/gwblogo.png" alt="Logo" />
          </Link>
          <div className="navigation Nlogin">
            <Link to="/profile">   
              <p className="profileName">
                <span><AccountCircleIcon  sx={{  color: 'grey',fontSize: 40, }}/></span>
                <span className="nameInside">{data.nama}</span>
              </p>
            </Link>
          </div>
        </header>
      </>
    );
    
  }
//   // if(test2){ 
//   //   return (
//   //     <>
//   //       <header className="header-wrapper">
//   //         <Link to="/">
//   //           <img src="/gwblogo.png" alt="Logo" />
//   //         </Link>
//   //         <div className="navigation login">
//   //           <Link to="/profile">   
//   //             <p className="profileName">
//   //               <span><AccountCircleIcon  sx={{  color: 'grey',fontSize: 40, }}/></span>
//   //               <span className="nameInside">John Doe</span>
//   //             </p>
//   //           </Link>
//   //         </div>
//   //       </header>
//   //     </>
//   //   );
    
//   // }

  return (
    <header className="header-wrapper">
      <Link to="/">
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



