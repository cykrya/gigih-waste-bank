import "./loginregis.css"
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
import {email, password,nama,umur,alamat,jeniskel,hadLogin} from '../../components/core/slice';
//import CheckData from "./alert";

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

// export default function Register() {
  const Register = () => {
  const [profemail, setprofEmail] = useState("");
  const [profpassword, setprofPassword] = useState("");
  const [profname, setprofName] = useState("");
  const [profage, setprofAge] = useState("");
  const [profaddress, setprofAddress] = useState("");
  const [profgender, setprofGender] = useState('Pria');
  const dispatch = useDispatch()

  const InsertProfileData = (e) => {
    e.preventDefault();
    console.log(profemail);
    console.log(profpassword);  
    console.log(profname);  
    console.log(profage);  
    console.log(profaddress);  
    console.log(profgender);
   
    dispatch(email(profemail));
    dispatch(password(profpassword));
    dispatch(nama(profname));  
    dispatch(umur(profage));
    dispatch(alamat(profaddress));
    dispatch(jeniskel(profgender));
    dispatch(hadLogin(true));
  };

  const test1=((useSelector((state)=>state.profile)).email);
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


    return (
      <ThemeProvider theme={theme}>
        <div className="page register">
          <div className="registerWrapper"> 
            <form onSubmit={InsertProfileData} className="playlistForm">
              <FormControl className="ssearch">
                <Box mt={0.5} sx={{m:1, pt:3} }>
                  <IconTextField onChange={(e) => setprofEmail(e.target.value)}
                    label="Email"
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
                      type="current-password"
                      size="small"
                      sx={{width: '50ch',fontSize: 12}}
                      iconStart={<KeyIcon sx={{ color: "black"}} />}
                    /> 
                  </span>
                </Box>
                
                <Box mt={0.5} sx={{m:1, mb:0.3} }>
                  <IconTextField  onChange={(e) => setprofName(e.target.value)}
                    label="Nama"
                    type="text"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<PersonIcon sx={{ color: "black"}}/>}
                  />
                </Box>
                
                <Box mt={0.5} sx={{m:1, mb:0.3} }>
                  <IconTextField  onChange={(e) => setprofAge(e.target.value)}
                    label="umur"
                    type="number"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<NumbersIcon sx={{ color: "black"}}/>}
                  />
                </Box>

                <Box mt={0.5} sx={{m:1,mb:0.3} }>
                  <IconTextField  onChange={(e) => setprofAddress(e.target.value)}
                    label="alamat"
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
                    <Button variant="contained" type="input"  className="button register" sx={{ color: 'white' ,width:150, borderRadius: '25px'}}>Masuk</Button>
                  {/* </Link> */}
                </Box>
                
              </FormControl>
            </form> 
          </div>
        </div>
      </ThemeProvider>
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

  export default Register;
