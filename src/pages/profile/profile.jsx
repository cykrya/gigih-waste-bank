import "./profile.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button,createTheme,ThemeProvider,Box} from "@mui/material";
import { useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import RightPanel from "../../components/PagePanel/rightpanel";
import LeftPanel from "../../components/PagePanel/leftpanel"; 
import { hadLogin } from "../../components/core/slice";


const theme1 = createTheme({
  palette: {
    primary: {
      main: '#295A83',
    },
    secondary: {
      main: '#EBEBEB',
    },

  },
});const theme2 = createTheme({
  palette: {
    primary: {
      main: '#D84242',
    },
    secondary: {
      main: '#EBEBEB',
    },

  },
});





const Profile = () => {
  const dispatch = useDispatch()
  const Logout = () => {
    dispatch(hadLogin(false));
  }
  const test1=((useSelector((state)=>state.profile)).email);
  const test3=((useSelector((state)=>state.profile)).nama);
  const test4=((useSelector((state)=>state.profile)).umur);
  const test5=((useSelector((state)=>state.profile)).alamat);
  const test6=((useSelector((state)=>state.profile)).jeniskel);


    return (
      <div className="profilePage">
        <div className="LPanel">
          <LeftPanel/></div>
        <div className="profileWrapper">
          <div className="profileHeader"><p className="headerName">Profil</p>
          </div>
          <div className="profileContent">
            <AccountCircleIcon sx={{ fontSize: 55 ,pt:3  }}/>
            <p className="profileName">{test3}</p>
            <div className="profileDataWrapper">
              <div className="profileData">
                <p>Email</p>
                <p className="data">{test1}</p>
                <p>Umur</p>
                <p className="data">{test4}</p>
                <p>Jenis Kelamin</p>
                <p className="data">{test6}</p>
                <p>Alamat</p>
                <p className="data">{test5}</p>
              </div>
            </div>
            <ThemeProvider theme={theme1}>
<Box>
<Link to="/editprofile">
<Button  variant= "contained" type="input"  className="button Eprofile" sx={{ color: 'white' ,width:150, borderRadius: '25px' , mt: 6}}>Edit Akun</Button>
          </Link>
         
</Box></ThemeProvider>


<ThemeProvider theme={theme2}>
<Button href="/login" onClick={Logout} variant="contained" type="input"  className="button Logout" sx={{ color: 'white' ,width:150, borderRadius: '25px', mt: 1}}>Keluar</Button></ThemeProvider>

            </div>
        </div>
        <RightPanel/>
        
     </div>
    );
  }

  export default Profile;