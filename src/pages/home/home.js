import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./home.css";
import { Link } from "react-router-dom";


function Home() {
    const education = [
        {
            id:1,
            title:"Pengertian dan Perbedaan Sampah Organik dan Anorganik",
            link:"/Aone",
            img:"https://img.freepik.com/free-photo/dump-rubbish_140289-64.jpg?w=2000"
        },
        {
            id:2,
            title:"Jenis-Jenis Sampah Organik dan Anorganik",
            link:"/Atwo",
            img:"https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            id:3,
            title:"Kelebihan & cara membuat Pupuk Organik cair",
            link:"/Athree",
            img:"https://img.freepik.com/free-vector/organic-waste-recycling-process-compost_100147-81.jpg"
        },
    ];

    const aboutUs = [
        {
            id:1,
            title:"Tentang Kami",
            desc:"Kami memberikan wadah bagi masyarakat untuk dapat ikut serta mengatasi permasalahan tentang sampah, yaitu melalui edukasi cara mengolah sampah  dan memisahkan sampah berdasarkan jenisnya serta memberikan pengalaman yang menyenangkan tentang mengolah sampah dan benefit yang akan didapatkan.",
        }
    ]

return (
    <div className="home">
        <div className="education-slider">
        <Carousel className="main-slide" showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        showStatus={false}>
        {
            education.map( e =>
                <div key={e}>
                    <img src={e.img} width="671px" height="352px" alt="education"/>
                    <Link to={e.link}>
                    <p className="caption">{e.title}</p>
                    </Link>
                </div>
            )
        }
        </Carousel>
        </div>
        {
            aboutUs.map( a =>
                <div key ={a} className="aboutUs">
                    <h1>{a.title}</h1>
                    <p>{a.desc}</p>
                </div>
            )
        }
    </div>
);
}


export default Home;
