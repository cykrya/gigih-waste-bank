import "./histori.css";

export default function histori() {
  return (
    <div className="sub-container">
      <img
        className="sidepanel-img"
        src="/images/leftpanel.png"
        alt="sidepanel"
      />
      <div className="content">
        <div className="content-title">
          <h1>Aktivitas Saya</h1>
          <div className="indikator-wrapper">
            <div className="trash-amount">
              <h1>0</h1>
            </div>
          </div>
        </div>
        <div className="main-content"></div>
      </div>
      <img
        className="sidepanel-img"
        src="/images/rightpanel.png"
        alt="sidepanel"
      />
    </div>
  );
}
