import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./edukasi.css";

import RightPanel from "../../components/PagePanel/rightpanel";
import LeftPanel from "../../components/PagePanel/leftpanel";


export default function Edukasi() {

  return (
    <div className="page sub-container">
      <LeftPanel />
      <div className="edukasi-wrapper">

        <div className="EdukasiContent">
          <h1 className="h1-edukasi">Pengertian Sampah Organik dan Anorganik</h1>
          <div className="content-details">
            <img src='/img/c1.png' alt="jpg" className='icon c1'></img>  
            <p className="isi c1">Sampah organik adalah bahan bahan yang sudah dibuang dan sudah tidak terpakai
            yang berasal dari hasil produk berbahan dasar hayati yang mudah terdegradasi oleh mikroorganisme. 
            Proses degradasi oleh mikroorganisme berlangsung secara alami. Sampah Organik dapat dimanfaatkan 
            kembali dengan dijadikan pupuk kompos yang berguna menyuburkan  tanaman. Sampah anorganik adalah bahan [...]
            </p>
              <Link to="/Aone">
                  <a className= "moredetails">Baca Selengkapnya...</a>
                </Link>
          </div>
        </div>

        <div className="EdukasiContent">
          <h1 className="h1-edukasi">Jenis - Jenis Sampah Organik dan Anorganik</h1>
          <div className="content-details">
            <img src='/img/c2.png' alt="jpg" className='icon c2'></img>  
              <div className="isi c2">Jenis – Jenis Sampah Organik
                1. Sampah Organik Basah
                Sampah organik basah merupakan sampah organik yang mengandung banyak air.contoh dari jenis 
                sampah organic basah yakni seperti  sisa sisa sayur, kulit pisang, buah yang sudah busuk, kulit 
                bawang dan sejenisnya.

                2. Sampah Organik Kering
                Sampah organik kering merupakan sampah organik yang  mengandung sedikit air. Contoh dari jenis sampah organik 
                kering yakni seperti kayu, ranting p[...]
              </div>
              <Link to="/Atwo">
                <a className= "moredetails">Baca Selengkapnya...</a>
              </Link>
          </div>
        </div>

        <div className="EdukasiContent">
          <h1 className="h1-edukasi">Pengolahan Sampah Organik Bekas Menjadi Pupuk</h1>
          <div className="content-details">
            <img src='/img/c3.png' alt="jpg" className='icon c3'></img>  
              <div className="isi c3">Jenis – Jenis Sampah Organik
                Kelebihan dari Pupuk Organik Cair
                umumnya tidak menyebabkan tanah dan tanaman menjadi rusak walaupun digunakan sesering mungkin.
                mengandung Giberelin atau asam giberelat (GA), yaitu hormon perangsang pertumbuhan tanaman untuk 
                memicu munculnya bunga dan pembungaan yang serempak. memiliki bahan pengikat, sehingga larutan 
                pupuk yang diberikan ke permukaan tanah bis[...]
              </div>
              <Link to="/Athree">
                <a className= "moredetails c33">Baca Selengkapnya...</a>
              </Link>
          </div>
        </div>
      </div>
      <RightPanel />
    </div>
  );
}