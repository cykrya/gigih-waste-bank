import "./article.css";
import data from "./data.json";
export default function A3() {
  const title= data[2].title;
  const paragraph= data[2].paragraphs;
  const img= data[0].img;
    return (
      <div className="page-edukasi edukasi-container">
      <div className="A-Wrapper">
        <h1 className="A-title">{title}</h1>
        <img src={img} alt="jpg" className='icon c2'></img>  
        <article className="A-content">
        <div dangerouslySetInnerHTML={{ __html: paragraph}}/>
        {/* <h2>Kelebihan dari Pupuk Organik Cair</h2>
          <ul>
            <li>umumnya tidak menyebabkan tanah dan tanaman menjadi rusak walaupun digunakan sesering mungkin. </li>
            <li>mengandung Giberelin atau asam giberelat (GA), yaitu hormon perangsang pertumbuhan tanaman untuk memicu munculnya 
              bunga dan pembungaan yang serempak.</li>
            <li>memiliki bahan pengikat, sehingga larutan pupuk yang diberikan ke permukaan tanah bisa langsung digunakan oleh 
              tanaman.</li>
            <li>Kandungan alkohol pada pupuk organik berfungsi untuk sterilisasi pada tanaman, yaitu mengurangi dan menghentikan 
          pertumbuhan mikroba pengganggu pada tumbuhan terutama pada daun dan batang, seperti bercak daun, jamur dan spora 
          organisme penyakit.</li>
            <li>ramah lingkungan, gampang didapat, dan ramah kantong  dibanding dengan harga pupuk anorganik yang semakin melangit.</li>
          </ul>

          <h2>Tahap membuat Pupuk Organik Cair:</h2>
          <ul>
            <li>Siapkan bahan bakunya, yakni sampah-sampah organik. Anda bisa mendapatkannya dari limbah rumah tangga atau kalau 
            mau kita dapat mengais sisa-sisa sayuran di pasar sayur. Disitu gudangnya.</li>
            <li>Kemudian cincang semua sampah hijau seperti sisa  
            sayuran, sayuran basi, dan sebagainya.</li>
            <li>Siapkan tong plastik atau tong bekas wadah cat tembok ukuran 25 kilogram (kg), lengkap dengan tutupnya. Siapkan 
            pula kantong plastik dan beri beberapa lubang sebesar 1 cm. Lubang ini untuk memperlancar sirkulasi air dalam tong.</li>
            <li>Siapkan tetes tebu atau gula yang sudah dilarutkan untuk mengaktifkan EM4.</li>
            <li>Siapkan EM4 untuk mempermudah proses pelarutan. Anda bisa membelinya di toko-toko pertanian atau membuatnya 
            sendiri. Kalau anda ingin membuat sendiri berikut ini panduannya. </li>
          </ul>
          
          <h2>Cara mudah membuat EM4 sederhana:</h2>
          <ul>
            <li>
            Siapkan air sumber/air sumur. Untuk hasil maksimal jangan gunakan air hujan, air PAM atau air irigasi karena dapat 
          tercemar zat-zat kimia yang dapat menghambat pertumbuhan mikroba.
            </li>
            <li>Campurkan cincangan sampah hijau, EM4, dan air gula atau tetes tebu ke dalam tong plastik. Setelah itu campuran 
          dimasukkan ke dalam kantong plastik yang sudah dilubangi. Kemudian masukkan kantong plastik ini ke dalam tong dan 
          tambahkan dengan air tanah. Jangan lupa ikat kantong plastik berisi sampah hijau itu dan tutup rapat tongnya selama 
          kurang lebih tiga minggu.</li>
            <li>Setelah tiga minggu, buka tutup tong dan cek hasilnya. Jika sampah dalam tong itu tidak berbau busuk dan kelihatan 
          menyusut berarti pembuatan pupuk organik cair anda berhasil. Angkat sampah dalam kantong plastik dan tiriskan. Anda 
          akan mendapatkan 2 hal, sampah dari dalam plastik menjadi pupuk padat, sedangkan air dalam tong menjadi pupuk organik 
          cair.</li>
          </ul> */}
        </article>
      </div>
    </div>
    );
  }