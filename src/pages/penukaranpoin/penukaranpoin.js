/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./penukaran.css";
import { Link } from "react-router-dom";

import RightPanel from "../../components/PagePanel/rightpanel";
import LeftPanel from "../../components/PagePanel/leftpanel";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

export default function PenukaranPoin() {
  const [data, setData] = useState([]);
  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_ENDPOINT}/shops?populate=*`
        ).then((response) => response.json());
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
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
    getData();
    getWallet();
  }, []);

  console.log(data);

  return (
    <div className="page sub-container">
      <LeftPanel />
      <div className="content-wrap">
        <div className="title-wrapper">
          <h1>Redeem Point</h1>
          <div className="icon-indikator">
            <div className="coin-indikator coin-transaksi">
              <PaidOutlinedIcon
                sx={{ fontSize: 24 }}
                style={{ fill: "#000000" }}
              />
              <p>{wallet}</p>
            </div>{" "}
            <Link className="time-icon" to="/historipoin">
              <AccessTimeIcon
                sx={{ fontSize: 40 }}
                style={{ fill: "#00000" }}
              />
            </Link>
          </div>
        </div>
        <div className="content">
          {data.length === 0 ? (
            <p>Loading....</p>
          ) : (
            <div className="content-title">
              {data.map((item) => {
                const current = new Date();
                let date = current.getDate();
                let month = current.getMonth() + 1;
                let year = current.getFullYear();
                const currentDate = `${year}-${
                  month < 10 ? `0${month}` : `${month}`
                }-${date < 10 ? `0${date}` : `${date}`}`;

                const postData = async () => {
                  var newWallet = parseInt(wallet);
                  if (newWallet >= item.attributes.price) {
                    const res = await fetch(
                      `${process.env.REACT_APP_API_ENDPOINT}/points`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          data: {
                            amount: 1,
                            reedem_date: `${currentDate}`,
                            user_id: [5],
                            shop: [item.id],
                          },
                        }),
                      }
                    ).then(async() => {
                      alert(`SELAMAT ANDA BERHASIL MENUKARKAN ${item.attributes.price} POIN`);
                      try {
                        
                        const add = await fetch(
                          `${process.env.REACT_APP_API_ENDPOINT}/users/5`,
                          {
                            method: "PUT",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              wallet: [newWallet - item.attributes.price],
                            }),
                          }
                        );
                      } catch (err) {
                        console.log(err.message);
                      }
                      window.location.reload();
                    });                   
                  } else {
                    alert("saldo anda kurang");
                  }
                };

                return (
                  <div className="RedeemWrapper">
                    <img
                      className="uangtunai"
                      src={item.attributes.item_image}
                      alt="Logo"
                    />
                    <p>{item.attributes.item_type}</p>
                    <p>{item.attributes.price}</p>
                    <button onClick={postData} className="reedem-button">
                      Tukar Poin
                    </button>
                    {/* <Popup trigger={<button onSubmit={postData} > Tukar Poin </button>} position="center left">
                <h3> SELAMAT ANDA BERHASIL MENUKARKAN {item.attributes.price} POIN </h3>
              </Popup> */}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <RightPanel />
    </div>
  );
}
