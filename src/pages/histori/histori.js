import React, { useState, useEffect } from "react";
import "./histori.css";
import { Box, Button } from "@mui/material";
import HistoryCard from "../../components/HistoryCard/historycard";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InboxIcon from "@mui/icons-material/Inbox";
import RightPanel from "../../components/PagePanel/rightpanel";
import LeftPanel from "../../components/PagePanel/leftpanel";

export default function Histori() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/transactions?populate=*&filters[user_id][id]=2").then(
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
      <div className="content">
        <div className="title content-wrapper">
          <h1>Aktivitas Saya</h1>
          <div className="indikator-wrapper">
            <div className="trash-amount">
              <DeleteOutlineIcon sx={{ fontSize: 40 }} />
              <h1>{data.length}</h1>
            </div>
          </div>
        </div>
        <div className="main-content">
          {data.length === 0 ? (
            <div className="no-contain content-wrapper">
              <p style={{ color: "#797D87" }}>Belum ada transaksi</p>
              <InboxIcon sx={{ fontSize: 60 }} style={{ fill: "#797D87" }} />
              <Box mt={0.5} sx={{ mt: 3, mb: 0.3 }}>
                <Button
                  variant="contained"
                  type="input"
                  className="button setor"
                  sx={{ color: "white", width: 150, borderRadius: "25px" }}
                >
                  Setor
                </Button>
              </Box>
            </div>
          ) : (
            <>
              {data.map((Value) => {
                return (
                  <HistoryCard
                    point={Value.attributes.point}
                    date={Value.attributes.transaction_date}
                    type={Value.attributes.trash_type}
                    amount={Value.attributes.amount}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
      <RightPanel />
    </div>
  );
}
