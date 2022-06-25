/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Button, createTheme, FormControl, InputAdornment, TextField, ThemeProvider } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { Link } from "react-router-dom";
// import store from "../../components/core/store";


import "./loginregis.css"

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



export default function login() {
    return (
      <ThemeProvider theme={theme}>
        <div className="page login">
          <div className="loginWrapper"> 
            <form className="playlistForm">
              <FormControl className="ssearch">
                <Box mt={0.5} sx={{m:1, pt:3} }>
                  <IconTextField
                    label="Email / No Telp"
                    type="text"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<EmailIcon sx={{ color: "black"}}/>}
                  />
                </Box>

                <Box mt={0.5} sx={{mt:1,mb:0.3}}>
                  <span>
                    <IconTextField
                      label="Password"
                      type="password"
                      size="small"
                      sx={{width: '50ch',fontSize: 12}}
                      iconStart={<KeyIcon sx={{ color: "black"}} />}
                    /> 
                  </span>
                </Box>
                <a className= "lupapassword" href={`https://youtu.be/zqNTltOGh5c`}> lupa password?</a>
                <Box mt={0.5} sx={{mt:3,mb:0.3}}>
                  <Link to="/home">
                    <Button variant="contained" type="input"  className="login-button" sx={{ color: 'white' ,width:150, borderRadius: '25px'}}>Masuk</Button>
                  </Link>
                </Box>
                <Link to="/register">
                  <a className= "noakun">belum punya akun?</a>
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