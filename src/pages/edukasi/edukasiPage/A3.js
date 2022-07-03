import "./article.css";
import data from "./data.json";
export default function A3() {
  const title= data[2].title;
  const paragraph= data[2].paragraphs;
  const img= data[2].img;
    return (
      <div className="page-edukasi edukasi-container">
      <div className="A-Wrapper">
        <h1 className="A-title">{title}</h1>
        <img src={img} alt="jpg" className='icon c2'></img>  
        <article className="A-content">
        <div dangerouslySetInnerHTML={{ __html: paragraph}}/>
        </article>
      </div>
    </div>
    );
  }