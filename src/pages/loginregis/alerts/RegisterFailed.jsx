import { Alert, Box, Collapse } from "@mui/material";


const RegisterFailed = ({Open2}) => {
  return(
      <Box sx={{width:'500px',zIndex: 'tooltip', position: 'absolute',display:'inline-block', mt:2,ml:4 }}>
        <Collapse in={Open2}>
          <Alert variant="filled" severity="error" sx= {{mb:2}}>
              tolong isi semua data anda!
          </Alert>
        </Collapse>
      </Box>
    )
  };

export default RegisterFailed;