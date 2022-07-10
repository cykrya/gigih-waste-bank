/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
const ShowEdukasi = (data,img,title,preview) => {
    // console.log("key: ");
    // console.log(data.data);

    // eslint-disable-next-line default-case
    switch (data.data) {
        default:
        case "1":
            // console.log("entering case1:");    
            // console.log(data.data);
            return(
                <div className="EdukasiContent">
                    <h1 className="h1-edukasi">{data.title}</h1>
                    <div className="content-details">
                        <img src={data.img} alt="jpg" className='icon c1'></img>  
                        <p className="isi c1">
                            {data.preview}
                        </p>
                    </div>
                    <Link to="/Aone">
                        <a className= "moredetails">Baca Selengkapnya...</a>
                        </Link>
                </div>
            )
          
        case "2":
            // console.log("entering case2:");    
            // console.log(data.data);
            // console.log(data);
            return(
                <div className="EdukasiContent">
                    <h1 className="h1-edukasi">{data.title}</h1>
                    <div className="content-details">
                        <img src={data.img} alt="jpg" className='icon c2'></img>  
                        <p className="isi c2">
                            {data.preview}
                        </p>
                    </div>
                    <Link to="/Atwo">
                        <a className= "moredetails">Baca Selengkapnya...</a>
                        </Link>
                </div>
            )
          
        case "3":
            // console.log("entering case3:");    
            // console.log(data.data);
            // console.log(data);
            return(
                <div className="EdukasiContent">
                    <h1 className="h1-edukasi">{data.title}</h1>
                    <div className="content-details">
                        <img src={data.img} alt="jpg" className='icon c3'></img>  
                        <p className="isi c3">
                            {data.preview}
                        </p>
                    </div>
                    <Link to="/Athree">
                        <a className= "moredetails">Baca Selengkapnya...</a>
                        </Link>
                </div>
            )
          
      } 
}

export default ShowEdukasi;