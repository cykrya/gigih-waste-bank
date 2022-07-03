
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import  { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Provider } from "react-redux";
import store from "./components/core/store";
import App from './App';

const AppWrapper = () => {
    return (
      <Provider store={store}> 
        <App />
      </Provider>
    )
  }

  export default AppWrapper;