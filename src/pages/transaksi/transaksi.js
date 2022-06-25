import { useState } from "react";

export default function Transaksi() {
  const [code, setCode] = useState("");
  const [pending, setPending] = useState(false);
  console.log(pending);
  const checkData = async (e) => {
    e.preventDefault();
    setPending(true);
    try{const res = await fetch(
      `http://localhost:1337/api/transactions/${code}`
    ).then((response) => response.json())
    if (res.data.attributes.is_confirmed === false) {
      const res = await fetch(
        `http://localhost:1337/api/transactions/${code}`,
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
    <div className="page">
      
      <form onSubmit={checkData}>
        <input
          type="text"
          placeholder="masukkan nomor kode di sini"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        {pending && <button disabled={pending}>Reedeming</button>}
        {!pending && <button>Reedem</button>}
        
      </form>
    </div>
  );
}
