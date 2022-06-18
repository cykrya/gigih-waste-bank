import "./loginregis.css"
import  { useEffect, useState } from "react";
import { Box, Button, createTheme, FormControl, InputAdornment, TextField, ThemeProvider, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import WcIcon from '@mui/icons-material/Wc';
import NumbersIcon from '@mui/icons-material/Numbers';
import HomeIcon from '@mui/icons-material/Home';

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
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
    {
      value: 'Others',
      label: 'Others',
    },
  ];

  
    
export default function Register() {
   
  const [genderselect, setGender] = useState('Male');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

    return (
      <ThemeProvider theme={theme}>
        <div className="page register">
          <div className="registerWrapper"> 
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
                
                <Box mt={0.5} sx={{m:1, mb:0.3} }>
                  <IconTextField
                    label="Nama"
                    type="text"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<PersonIcon sx={{ color: "black"}}/>}
                  />
                </Box>
                
                <Box mt={0.5} sx={{m:1, mb:0.3} }>
                  <IconTextField
                    label="umur"
                    type="number"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<NumbersIcon sx={{ color: "black"}}/>}
                  />
                </Box>

                <Box mt={0.5} sx={{m:1,mb:0.3} }>
                  <IconTextField
                    label="alamat"
                    type="text"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<HomeIcon sx={{ color: "black"}}/>}
                  />
                </Box>

                <Box mt={0.5} sx={{m:1, mb:0.3} }>
                  {/* <IconTextField
                    label="Jenis kelamin"
                    type="text"
                    size="small"
                    sx={{width: '50ch',fontSize: 12}}
                    iconStart={<EmailIcon sx={{ color: "black"}}/>}
                  /> */}

                  <TextField
                    id="outlined-select-currency"
                    select
                    label="jenis kelamin"
                    size="small"
                    value={genderselect}
                    onChange={handleChange}
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
                  <Link to="/home">
                    <Button variant="contained" type="input"  className="button register" sx={{ color: 'white' ,width:150, borderRadius: '25px'}}>Masuk</Button>
                  </Link>
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
