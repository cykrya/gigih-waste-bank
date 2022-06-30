import { Alert, Box, Collapse } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#857864',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const LoginSuccess = ({Open}) => {
return(
    <ThemeProvider theme={theme}>
      <Box sx={{width:'500px',zIndex: 'tooltip', position: 'absolute',display:'inline-block', mt:2,ml:4 }}>
        <Collapse in={Open}>
          <Alert variant="filled" severity="success"  sx= {{mb:2}}>
              Logged in!
          </Alert>
        </Collapse>
      </Box>
    </ThemeProvider>
  )
};

export default LoginSuccess;