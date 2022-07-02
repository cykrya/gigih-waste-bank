import "./article.css";
import data from "./data.json";
export default function A2() {
  const title= data[1].title;
  const paragraph= data[1].paragraphs;
  const img= data[0].img;
    return (
      <div className="page-edukasi edukasi-container">
      <div className="A-Wrapper">
        <h1 className="A-title">{title}</h1>
        <img src={img} alt="jpg" className='icon c2'></img>  
        <article className="A-content">
        <div dangerouslySetInnerHTML={{ __html: paragraph}}/>
          {/* <h2>Jenis – Jenis Sampah Organik</h2>
            <h3>1. Sampah Organik Basah</h3>
            Sampah organik basah merupakan sampah organik yang mengandung banyak air.contoh dari jenis sampah organic basah yakni 
            seperti  sisa sisa sayur, kulit pisang, buah yang sudah busuk, kulit bawang dan sejenisnya.


            <h3>2. Sampah Organik Kering</h3>      
            Sampah organik kering merupakan sampah organik yang mengandung sedikit air. Contoh dari jenis sampah organik kering 
            yakni seperti kayu, ranting pohon, kayu dan daun – daun kering.
        
          <h2>Jenis Sampah Anorganik</h2>
            <h3>1. Sampah Anorganik Lunak</h3>
            Sampah anorganik lunak merupakan jenis sampah Anorganik yang mudah untuk dibentuk atau untuk diolah. Bahan penyusun 
            dari sampah anorganik lunak ini terdiri atas kandungan bahan-bahan yang lentur.contoh dari sampah anorganik jenis ini 
            antara lain sampah plastik, bungkus kemasan, sampah dari bahan tekstil seperti kain perca,dll.



            <h3>1. Sampah Anorganik Keras</h3>      
            Sampah anorganik keras adalah jenis sampah anorganik yang memiliki kandungan bahan yang sulit untuk dihancurkan dan 
            sifatnya lebih kuat jika dibandingkan dengan jenis yang lunak. Limbah ini rata rata sulit untuk mengolahnya kembali. 
            Jika ingin melakukan pendaur ulangan pada sampah anorganik keras ini diperlukan Alat dan mesin yang lebih komplek. 
            Contoh dari jenis sampah anorganik keras, antara lain sampah kaca,kaleng,bahan-bahan berdasar metal,dll. */}

        </article>
      </div>
    </div>
    );
  }