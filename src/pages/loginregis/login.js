/* eslint-disable jsx-a11y/anchor-is-valid */
import "./loginregis.css"
import { Box, Button, createTheme, FormControl, InputAdornment, TextField, ThemeProvider } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { Link } from "react-router-dom";
// import store from "../../components/core/store";

import { useState,useEffect,useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';

import LoginSuccess from "./alerts/LoginSuccess";
import LoginFailed from "./alerts/LoginFailed";
import {hadLogin} from '../../components/core/slice';

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

const Login = () => {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const loginEmail=((useSelector((state)=>state.profile)).email);
  const loginPassword=((useSelector((state)=>state.profile)).password);
  const [Open, setOpen] = useState(false);
  const [Open2, setOpen2] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }, [Open]);

  useEffect(() => {
    setTimeout(() => {
      setOpen2(false);
    }, 3000);
  }, [Open2]);

  const navigate = useNavigate();
  const nav = useCallback(() => navigate('/', {replace: true}), [navigate]);

  const get = (e) => {
    e.preventDefault();
    // console.log("checking data");
    // console.log("logEmail:" + logEmail);
    // console.log("loginEmail:" + loginEmail);
    // console.log("logPassword:" + logPassword);
    // console.log("loginPassword:" + loginPassword);
    if ((logEmail===loginEmail) & (logPassword===loginPassword)){
      // console.log("userdata ada");
      setOpen(true);
      dispatch(hadLogin(true));
      nav();
      return{

      }
    }
      setOpen2(true);
      // console.log("user data tidak ditemukan");
  };
    return (
      <ThemeProvider theme={theme}>
        
        <div className="page login">
        <LoginSuccess Open={Open}/>
        <LoginFailed Open2={Open2}/>
          <div className="loginWrapper"> 
            <form onSubmit={get} className="Form">
              <FormControl className="ssearch">
                <Box mt={0.5} sx={{m:1, pt:3} }>
                  <IconTextField onChange={(e) => setLogEmail(e.target.value)}
                    label="Email"
                    type="text"
                    autoComplete="username"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<EmailIcon sx={{ color: "black"}}/>}
                  />
                </Box>

                <Box mt={0.5} sx={{mt:1,mb:0.3}}>
                  <span>
                    <IconTextField onChange={(e) => setLogPassword(e.target.value)}
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      size="small"
                      sx={{width: '50ch',fontSize: 12}}
                      iconStart={<KeyIcon sx={{ color: "black"}} />}
                    /> 
                  </span>
                </Box>
                {/* <a className= "lupapassword" href={`https://youtu.be/zqNTltOGh5c`}> lupa password?</a> */}
                <Box mt={0.5} sx={{mt:3,mb:0.3}}>
  
                    <Button variant="contained" type="input"  className="login-button" sx={{ color: 'white' ,width:150, borderRadius: '25px'}}>Masuk</Button>
                  {/* button href="/" it made the form doesnt works tho...*/}
                </Box>
                <Link to="/register">
                  <p className= "noakun">belum punya akun?</p>
                </Link>
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

  export default Login;