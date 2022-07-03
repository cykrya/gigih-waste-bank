import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./edukasi.css";
import data from "./edukasiPage/data.json";
import ShowEdukasi from "./ShowEdukasi";
import RightPanel from "../../components/PagePanel/rightpanel";
import LeftPanel from "../../components/PagePanel/leftpanel";


export default function Edukasi() {
  // console.log(data[0].preview)
  var data1="";
  return (

    <div className="page-edukasi edukasi-container">
      <LeftPanel />
      <div className="edukasi-wrapper">
        {data.map((data) => (
          // console.log(data.key);
          data1=data.key,
          <ShowEdukasi 
            data={data1}
            img={data.img}
            title={data.title}
            preview={data.preview} 
          /> 
        ))}
      </div>
      <RightPanel />
    </div>
  );
}