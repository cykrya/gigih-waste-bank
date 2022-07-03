import { render,screen } from "@testing-library/react";
import App from "../App";
import configureStore from 'redux-mock-store'
import userEvent from '@testing-library/user-event';
import Login from "../pages/loginregis/login";
import { Provider } from 'react-redux'
import Edukasi from "../pages/edukasi/edukasi";
import { Router, Routes } from "react-router-dom";
import AppWrapper from "../AppWrapper";

describe('testing the app launch', () => {
    const initialData = {profile: {
        email:'johndoe@gmail.com',
        password:'john12345',
        nama:'John Doe',
        umur:'21',
        alamat:'totally Sus St, Block C no. 3',
        jeniskel:'Pria',
        hadLogin:false,
      }}
    const mockStore = configureStore()
    let store
    it('Start the test on App!"', () => {
    store = mockStore(initialData)
      render(<Provider store={store}><App/></Provider>);

      const login= screen.getByRole('link', {
        name: /Masuk/i
      });
      expect(login).toBeInTheDocument();
      userEvent.click(login);    
    })
})
