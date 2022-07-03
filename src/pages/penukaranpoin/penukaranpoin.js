/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./penukaran.css";
import { Link } from "react-router-dom";

import RightPanel from "../../components/PagePanel/rightpanel";
import LeftPanel from "../../components/PagePanel/leftpanel";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function PenukaranPoin() {
  const [data, setData] = useState([]);

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
    getData();
  }, []);

  console.log(data);

  return (
    <div className="page sub-container">
      <div className="PLPanel"><LeftPanel /></div>
      <div className="content-wrap">
        <div className="title-wrapper">
          <h1>Redeem Point</h1>
          <Link className="time-icon" to="/historipoin">
            <AccessTimeIcon sx={{ fontSize: 40 }} style={{ fill: "#00000" }} />
          </Link>
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
                  ).then(() =>
                    alert(
                      `SELAMAT ANDA BERHASIL MENUKARKAN ${item.attributes.price} POIN`
                    )
                  );
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
