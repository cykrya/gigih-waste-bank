import React, { useState, useEffect } from "react";
import "./penukaran.css"

import HistoryCard from "../../components/HistoryCard/historycard";
import RightPanel from "../../components/PagePanel/rightpanel";
import LeftPanel from "../../components/PagePanel/leftpanel"; 

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Popup from "reactjs-popup";
import InboxIcon from "@mui/icons-material/Inbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function HistoriPoin() {
    const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/points?populate=*&filters[user_id][id]=5`).then(
          (response) => response.json()
        );
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
        <LeftPanel />
        <div className="content-wrap">
          <div className="title-wrapper">
            <h1>Redeem Point</h1>
            <AccessTimeIcon className="time-icon" sx={{ fontSize: 40 }}/>
          </div>
        <div className="content">
          <div className="poin-content">
          {data.length === 0 ? (
            <div className="no-contain content-wrapper">
              <p style={{ color: "#797D87" }}>Belum ada transaksi</p>
              <InboxIcon sx={{ fontSize: 60 }} style={{ fill: "#797D87" }} />
            </div>
          ) : (
            <>
              {data.map((value) => {
                return (
                  <HistoryCard
                  point={value.attributes.shop.data.attributes.price}
                  date={value.attributes.reedem_date}
                  type={value.attributes.shop.data.attributes.item_type}
                  amount={value.attributes.amount}
                  />
                );
               })}
            </>
          )}
          </div>
      </div>
      </div>
      <RightPanel />
    </div>
    );
  }