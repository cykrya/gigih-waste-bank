/* eslint-disable no-unused-vars */
import "./transaksi.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Popup from "reactjs-popup";

import RightPanelL from "../../components/PagePanel/rightpanelL";
import LeftPanelL from "../../components/PagePanel/leftpanelL";

export default function Transaksi() {
  const pointInformation = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/utilization-empty-water-bottle_144627-6048.jpg?w=2000",
      item: "Botol Plastik",
      point: "100 poin / kg",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/top-view-waste-with-organic-vegetables_23-2148666787.jpg?w=2000",
      item: "Sayuran / Dedaunan Organik",
      point: "10 poin / kg",
    },
  ];

  const [code, setCode] = useState("");
  const [wallet, setWallet] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const getWallet = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_ENDPOINT}/users/5`
        ).then((response) => response.json());
        setWallet(res.wallet);
      } catch (err) {
        console.log(err.message);
      }
    };
    getWallet();
  }, []);

  const checkData = async (e) => {
    e.preventDefault();
    setPending(true);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/transactions/${code}`
      ).then((response) => response.json());
      if (res.data.attributes.is_confirmed === false) {
        const put = await fetch(
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
                  id: 5,
                },
              },
            }),
          }
        )
          .then(async () => {
            alert("redeem success");
            try {
              var newWallet = parseInt(wallet);
              const add = await fetch(
                `${process.env.REACT_APP_API_ENDPOINT}/users/5`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    wallet: [newWallet + res.data.attributes.point],
                  }),
                }
              );
            } catch (err) {
              console.log(err.message);
            }
            window.location.reload();
          })
          .catch((err) => alert(err.message));
        setPending(false);
      } else {
        alert("token telah diredeem");
        setPending(false);
      }
    } catch (err) {
      alert("token tidak tersedia");
      setPending(false);
    }
  };

  return (
    <div className="transaction">
      <LeftPanelL />
      <div className="transaction-contents">
        <div className="contents-title">
          <h1>Transaksi</h1>
          <div className="icon-wrapper">
            <div className="coin-indikator coin-transaksi">
              <PaidOutlinedIcon
                sx={{ fontSize: 24 }}
                style={{ fill: "#000000" }}
              />
              <p>{wallet}</p>
            </div>
            <Link className="history-logo" to="/histori">
              <AccessTimeIcon
                sx={{ background: "#EBEBEB", fontSize: 50, width: 50 }}
              />
            </Link>
          </div>
        </div>
        <div className="inputToken-wrapper">
          <div className="point-information">
            {pointInformation.map((p) => (
              <div className="items">
                <img className="trash-type" src={p.img} alt="trashtype" />
                <p>{p.item}</p>
                <p>{p.point}</p>
              </div>
            ))}
          </div>
          <Popup
            trigger={
              <button className="inputToken-button"> masukkan token</button>
            }
            position="center"
          >
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
                  {pending && (
                    <button className="input-button" disabled={pending}>
                      Reedeming
                    </button>
                  )}
                  {!pending && <button className="input-button">Reedem</button>}
                </form>
              </center>
            </div>
          </Popup>
        </div>
      </div>
      <RightPanelL />
    </div>
  );
}
