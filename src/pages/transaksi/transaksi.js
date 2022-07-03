import { useState } from "react";
import "./transaksi.css"
import React from "react";
import Popup from "reactjs-popup";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "react-router-dom";

import RightPanelL from "../../components/PagePanel/rightpanelL";
import LeftPanelL from "../../components/PagePanel/leftpanelL";

export default function Transaksi() {
  const pointInformation = [
    {
        id:1,
        img: "https://img.freepik.com/free-photo/utilization-empty-water-bottle_144627-6048.jpg?w=2000",
        item: "Botol Plastik",
        point: "100 poin / kg",
    },
    {
      id:2,
      img: "https://img.freepik.com/free-photo/top-view-waste-with-organic-vegetables_23-2148666787.jpg?w=2000",
      item: "Sayuran / Dedaunan Organik",
      point: "10 poin / kg",
  },
  ];

  const [code, setCode] = useState("");
  const [pending, setPending] = useState(false);
  console.log(pending);
  const checkData = async (e) => {
    e.preventDefault();
    setPending(true);
    try{const res = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/transactions/${code}`
    ).then((response) => response.json())
    if (res.data.attributes.is_confirmed === false) {
      const res = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/transactions/${code}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              is_confirmed: true,
              user_id: {
                id: 1,
              },
            },
          }),
        }
      )
        .then(() => alert("redeem success"))
        .catch((err) => alert(err.message));
      setPending(false);
    } else {
      alert("kode udah diredeem");
      setPending(false);
    }}catch(err){
      alert("Kode tidak tersedia");
      setPending(false);
    }
  };

  

  return (
    <div className="transaction">
      <LeftPanelL/>
      <div className="transaction-contents">
        <div className="contents-title">
          <h1>Transaksi</h1>
          <Link className="history-logo" to="/histori">
          <AccessTimeIcon sx={{ background: "#EBEBEB", fontSize: 50, width: 50, }}/>
          </Link>
        </div>
        <div className="inputToken-wrapper">
          <div className="point-information">
          {
            pointInformation.map( p =>
                <div className="items">
                  <img className="trash-type" src={p.img} />
                  <p>{p.item}</p>
                  <p>{p.point}</p>
                </div>
            )
          }
          </div>
          <Popup trigger={<button className="inputToken-button"> masukkan token</button>} position="center">
          <div className="inputToken-form">
            <center>      
            <h2>masukkan token</h2>
            <form onSubmit={checkData}>
              <input
              type="text"
              placeholder="masukkan nomor kode di sini"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              />
              {pending && <button className="input-button" disabled={pending}>Reedeming</button>}
              {!pending && <button className="input-button">Reedem</button>}
            </form>
            </center>
          </div>
          </Popup>
        </div>
      </div>
      <RightPanelL/>
    </div>
  );
}
