import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import "./historycard.css";

export default function HistoryCard({ point, date, type, amount, satuan }) {
  return (
    <div className="history-card">
      <div className="card-top">
        <div className="transaction-indikator"><p>Selesai</p></div>
        <div className="coin-indikator">
        <PaidOutlinedIcon sx={{fontSize: 24}} style={{ fill: '#000000' }}/>
        <p>{point}</p>
        </div>
      </div>
      <div className="card-detail date">
      <h3>SETORAN</h3>
      <p>{date}</p>
      </div>
      <div className="card-detail type">
      <h3>JENIS SAMPAH</h3>
      <p>{type}</p>
      </div>
      <div className="card-detail amount">
      <h3>JUMLAH</h3>
      <p>{amount} {satuan}</p>
      </div>
    </div>
  );
}
