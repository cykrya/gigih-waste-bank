import "./loginregis/loginregis.css"
import "./editprofile.css"
import  {useState,useEffect } from "react";
import { Box, Button, createTheme, FormControl, InputAdornment, TextField, ThemeProvider, MenuItem } from "@mui/material";
//import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import WcIcon from '@mui/icons-material/Wc';
import NumbersIcon from '@mui/icons-material/Numbers';
import HomeIcon from '@mui/icons-material/Home';

import { useSelector, useDispatch } from 'react-redux';
import {email, password,nama,umur,alamat,jeniskel} from '../components/core/slice'
import RightPanel from "../components/PagePanel/rightpanel";
import LeftPanel from "../components/PagePanel/leftpanel"; 



const theme = createTheme({
  palette: {
    primary: {
      main: '#7FB066',
    },
    secondary: {
      main: '#EBEBEB',
    },
    
  },
});

const Gender = [
  {
    value: 'Pria',
    label: 'Pria',
  },
  {
    value: 'Wanita',
    label: 'Wanita',
  },
  {
    value: 'Lain',
    label: 'Lain',
  },
];




  const Editprofile = () => {
  const [profemailPhone, setprofEmailPhone] = useState("");
  const [profpassword, setprofPassword] = useState("");
  const [profname, setprofName] = useState("");
  const [profage, setprofAge] = useState("");
  const [profaddress, setprofAddress] = useState("");
  const [profgender, setprofGender] = useState('Pria');
  const dispatch = useDispatch()
    
  const InsertProfileData = (e) => {
    e.preventDefault();
    console.log(profemailPhone);
    console.log(profpassword);  
    console.log(profname);  
    console.log(profage);  
    console.log(profaddress);  
    console.log(profgender);
    dispatch(email(profemailPhone));
    dispatch(password(profpassword));  
    dispatch(nama(profname));  
    dispatch(umur(profage));  
    dispatch(alamat(profaddress));  
    dispatch(jeniskel(profgender));    

    
  };

  const AEmail=((useSelector((state)=>state.profile)).email);
  const APassword=((useSelector((state)=>state.profile)).password);
  const ANama=((useSelector((state)=>state.profile)).nama);
  const AUmur=((useSelector((state)=>state.profile)).umur);
  const AAlamat=((useSelector((state)=>state.profile)).alamat);
  const AJenisKel=((useSelector((state)=>state.profile)).jeniskel);
  
  useEffect (()=>{
    console.log("nama akun: "+AEmail);
    console.log("nama password: "+APassword);
    console.log("nama user: "+ANama);
    console.log("umur: "+AUmur);
    console.log("nama alamat: "+AAlamat);
    console.log("jenis kelamin: "+AJenisKel);
    setprofEmailPhone(AEmail);
    setprofPassword(APassword);
    setprofName(ANama);
    setprofAge(AUmur);
    setprofAddress(AAlamat);
    setprofGender(AJenisKel);
  },[AEmail, APassword, ANama, AUmur, AAlamat, AJenisKel]);


    return (
      <div className="page editprofilePage">
        <div className="LPanel">
          <LeftPanel/></div>
      <ThemeProvider theme={theme}>
        <div className="page-edit">
          <div className="editWrapper"> 
            <div className="profileHeader"><p className="headerName">Profil</p></div>
            <div className="profileContent">
              <form onSubmit={InsertProfileData} className="RegisterForm">
              <FormControl className="RegisterData">
                <Box mt={0.5} sx={{m:1, pt:3} }>
                  <IconTextField onChange={(e) => setprofEmailPhone(e.target.value)}
                    label="Email"
                    value={profemailPhone}
                    type="email"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<EmailIcon sx={{ color: "black"}}/>}
                  />
                </Box>

                <Box mt={0.5} sx={{mt:1,mb:0.3}}>
                  <span>
                    <IconTextField  onChange={(e) => setprofPassword(e.target.value)}
                      label="Password"
                      value={profpassword}
                      type="password"
                      size="small"
                      sx={{width: '50ch',fontSize: 12}}
                      iconStart={<KeyIcon sx={{ color: "black"}} />}
                    /> 
                  </span>
                </Box>
                
                <Box mt={0.5} sx={{m:1, mb:0.3} }>
                  <IconTextField  onChange={(e) => setprofName(e.target.value)}
                    label="Nama"
                    value={profname}
                    type="text"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<PersonIcon sx={{ color: "black"}}/>}
                  />
                </Box>
                
                <Box mt={0.5} sx={{m:1, mb:0.3} }>
                  <IconTextField  onChange={(e) => setprofAge(e.target.value)}
                    label="umur"
                    value={profage}
                    type="number"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<NumbersIcon sx={{ color: "black"}}/>}
                  />
                </Box>

                <Box mt={0.5} sx={{m:1,mb:0.3} }>
                  <IconTextField  onChange={(e) => setprofAddress(e.target.value)}
                    label="alamat"
                    value={profaddress}
                    type="text"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<HomeIcon sx={{ color: "black"}}/>}
                  />
                </Box>

                <Box mt={0.5} sx={{m:1, mb:0.3} }>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="jenis kelamin"
                    size="small"
                    value={profgender}
                    onChange={(e) => setprofGender(e.target.value)}
                    sx={{ width:'50ch',fontSize: 12}}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <WcIcon />
                        </InputAdornment>
                      ),
                    }}
                  >
                    {Gender.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Box mt={0.5} sx={{mt:3,mb:0.3}}>
                  {/* <Link to="/home"> */}
                    <Button variant="contained" type="input"  className="button Eprofile" sx={{ color: 'white' ,width:150, borderRadius: '25px'}}>Simpan</Button>
                  {/* </Link> */}
                </Box>
                
              </FormControl>
              </form>
              
            </div> 
          </div>
        </div>
      </ThemeProvider>
      <RightPanel/>
      </div>
    );
  }

  const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
    return (
      <TextField 
        {...props}
        InputProps={{
          ...InputProps,
          startAdornment: iconStart ? (
            <InputAdornment position="start">{iconStart}</InputAdornment>
          ) : null,
          endAdornment: iconEnd ? (
            <InputAdornment position="end">{iconEnd}</InputAdornment>
          ) : null
        }}
      />
    );
  };

  export default Editprofile;