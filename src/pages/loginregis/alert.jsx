import { Alert, Box, Collapse } from "@mui/material";
import { Link } from "react-router-dom";
import  { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {email, password,nama,umur,alamat,jeniskel} from '../../components/core/slice';


const CheckData = (test1,test2,test3,test4,test5,test6, profemail,profpassword,profname,profage,profaddress,profgender) => {
  console.log("\ni am at test data ");
  console.log("nama akun: "+test1);
  console.log("nama password: "+test2);
  console.log("nama user: "+test3);
  console.log("umur: "+test4);
  console.log("nama alamat: "+test5);
  console.log("jenis kelamin: "+test6);
  
  const dispatch = useDispatch()
  const [closeIt, setCloseIt] = useState(true);
  

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCloseIt(false);
  //     console.log(closeIt)
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  if(!test1){
    if(!test2){
      if(!test3){
        if(!test4){
          if(!test5){
            if(!test6){
              return (
                <>
                  <Box sx={{width:'93%'}}>
                    <Collapse in={closeIt}>
                      <Alert  severity="error" sx= {{mb:2}}>
                          email tidak boleh kosong
                      </Alert>
                    </Collapse>
                  </Box>
                  
                  <Box sx={{width:'93%'}}>
                    <Collapse in={closeIt}>
                      <Alert  severity="error" sx= {{mb:2}}>
                          Password tidak boleh kosong
                      </Alert>
                    </Collapse>
                  </Box>

                  <Box sx={{width:'93%'}}>
                    <Collapse in={closeIt}>
                      <Alert  severity="error" sx= {{mb:2}}>
                          Nama tidak boleh kosong
                      </Alert>
                    </Collapse>
                  </Box>

                  <Box sx={{width:'93%'}}>
                    <Collapse in={closeIt}>
                      <Alert  severity="error" sx= {{mb:2}}>
                          umur tidak boleh kosong
                      </Alert>
                    </Collapse>
                  </Box>

                  <Box sx={{width:'93%'}}>
                    <Collapse in={closeIt}>
                      <Alert  severity="error" sx= {{mb:2}}>
                          alamat tidak boleh kosong
                      </Alert>
                    </Collapse>
                  </Box>

                  <Box sx={{width:'93%'}}>
                    <Collapse in={closeIt}>
                      <Alert  severity="error" sx= {{mb:2}}>
                          jenis kelamin tidak boleh kosong
                      </Alert>
                    </Collapse>
                  </Box>
                </>
              );
            }
            return (
              <>
                <Box sx={{width:'93%'}}>
                  <Collapse in={closeIt}>
                    <Alert  severity="error" sx= {{mb:2}}>
                        email tidak boleh kosong
                    </Alert>
                  </Collapse>
                </Box>
        
                <Box sx={{width:'93%'}}>
                  <Collapse in={closeIt}>
                    <Alert  severity="error" sx= {{mb:2}}>
                        Password tidak boleh kosong
                    </Alert>
                  </Collapse>
                </Box>

                <Box sx={{width:'93%'}}>
                  <Collapse in={closeIt}>
                    <Alert  severity="error" sx= {{mb:2}}>
                        Nama tidak boleh kosong
                    </Alert>
                  </Collapse>
                </Box>

                <Box sx={{width:'93%'}}>
                  <Collapse in={closeIt}>
                    <Alert  severity="error" sx= {{mb:2}}>
                        umur tidak boleh kosong
                    </Alert>
                  </Collapse>
                </Box>

                <Box sx={{width:'93%'}}>
                  <Collapse in={closeIt}>
                    <Alert  severity="error" sx= {{mb:2}}>
                        alamat tidak boleh kosong
                    </Alert>
                  </Collapse>
                </Box>
              </>
            );
          }
          return (
            <>
            <Box sx={{width:'93%'}}>
                  <Collapse in={closeIt}>
                    <Alert  severity="error" sx= {{mb:2}}>
                        email tidak boleh kosong
                    </Alert>
                  </Collapse>
                </Box>
        
                <Box sx={{width:'93%'}}>
                <Collapse in={closeIt}>
                  <Alert  severity="error" sx= {{mb:2}}>
                      Password tidak boleh kosong
                  </Alert>
                </Collapse>
              </Box>

              <Box sx={{width:'93%'}}>
                  <Collapse in={closeIt}>
                    <Alert  severity="error" sx= {{mb:2}}>
                        Nama tidak boleh kosong
                    </Alert>
                  </Collapse>
                </Box>

                <Box sx={{width:'93%'}}>
                  <Collapse in={closeIt}>
                    <Alert  severity="error" sx= {{mb:2}}>
                        umur tidak boleh kosong
                    </Alert>
                  </Collapse>
                </Box>
          </>
          );
        }
        return (
          <>
            <Box sx={{width:'93%'}}>
              <Collapse in={closeIt}>
                <Alert  severity="error" sx= {{mb:2}}>
                    email cannot be empty
                </Alert>
              </Collapse>
            </Box>
  
            <Box sx={{width:'93%'}}>
              <Collapse in={closeIt}>
                <Alert  severity="error" sx= {{mb:2}}>
                  Password cannot be empty
                </Alert>
              </Collapse>
            </Box>
            
            <Box sx={{width:'93%'}}>
              <Collapse in={closeIt}>
                <Alert  severity="error" sx= {{mb:2}}>
                  Nama cannot be empty
                </Alert>
              </Collapse>
            </Box>
          </>
        );
      }
      return (
        <>
        <Box sx={{width:'93%'}}>
          <Collapse in={closeIt}>
            <Alert  severity="error" sx= {{mb:2}}>
            email cannot be empty
            </Alert>
          </Collapse>
        </Box>

        <Box sx={{width:'93%'}}>
        <Collapse in={closeIt}>
          <Alert  severity="error" sx= {{mb:2}}>
              Password cannot be empty
          </Alert>
        </Collapse>
      </Box>
      </>
      );
    }

    return (
      <Box sx={{width:'93%'}}>
        <Collapse in={closeIt}>
          <Alert  severity="error" sx= {{mb:2}}>
          email cannot be empty
          </Alert>
        </Collapse>
      </Box>
    );
    
  }

  dispatch(email(profemail));
    dispatch(password(profpassword));
    dispatch(nama(profname));  
    dispatch(umur(profage));
    dispatch(alamat(profaddress));
    dispatch(jeniskel(profgender));


  
};

export default CheckData;