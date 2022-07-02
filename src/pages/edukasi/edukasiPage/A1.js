import "./article.css";
import data from "./data.json";
export default function A1() {
  // const title= articles.data.a1.title;
  console.log("data: "+data[0].title)
  const title= data[0].title;
  const paragraph= data[0].paragraphs;
  const img= data[0].img;
    return (
      <div className="page-edukasi edukasi-container">
        <div className="A-Wrapper">
          {/* <h1 className="A-title">Pengertian dan Perbedaan Sampah Organik dan Anorganik</h1> */}
          <h1 className="A-title">{title}</h1>
          <img src={img} alt="jpg" className='icon c1'></img>  
          <article className="A-content">
            <div dangerouslySetInnerHTML={{ __html: paragraph}}/>
           
          </article>
        </div>
      </div>
    );
  }