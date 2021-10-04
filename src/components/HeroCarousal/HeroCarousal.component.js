import React, {useEffect, useState} from 'react'
import HeroSlider from "react-slick";

import axios from 'axios';

//import arrow button

import { NextArrow , PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousal() {

    const [images, setImages] = useState([]);
    useEffect(()=>{
        const requestGetImages = async()=>{
            const getImages = await axios.get('movie/now_playing')
            console.log(getImages);
            setImages(getImages.data.results);
        }  
        requestGetImages();
    },[]);

    const settingsLg={
        arrows:true,
        autoplay: true,
        centerMode: true,
        centerPadding:"300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
    }
    var settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow:<PrevArrow/>
      };
    //   const images =[
    //     "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1428&q=80%22",
    //     "https://images.unsplash.com/photo-1630018548696-e1f671020900?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80%22",
    //     "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80%22",
    //     "https://images.unsplash.com/photo-1629907912711-9845e6e762a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80%22",
    //     "https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80%22"
    //   ]
    return (
        <>

        <div className="lg:hidden" >
            
        <HeroSlider {...settings} >
            {
                    images.map((image)=>(
                        <div className="w-full h-64 py-3 md:h-80">
                            <img src={`http://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Caraousel" className="w-full h-full rounded-md"/>
                        </div>
                    ))
            }
         </HeroSlider>         

        </div>



        <div className="hidden lg:block" >

        <HeroSlider {...settingsLg} >
            {
                    images.map((image)=>(
                        <div className="w-full h-96 px-1 py-3 focus:border-0 border-transparent ">
                            <img src={`http://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Caraousel" className="w-full h-full rounded-md"/>
                        </div>
                    ))
            }
         </HeroSlider>         

        </div>




        </>
    );
}
// import React, {useState, useEffect} from "react";
// import HeroSlider from "react-slick";
// import axios from "axios";
// //Component
// import {NextArrow, PrevArrow} from "./Arrows.component";


// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const HeroCarousal = () => {

// const [images, setImages] = useState([]);

// useEffect(() => {
//   const requestNowPlayingMovies = async() => {
//     const getImages = await axios.get("/movie/now_playing");
//     setImages(getImages.data.results);
//   };
//   requestNowPlayingMovies();
// }, []);


//   const settingsLg = {
//     arrows: true,
//     autoplay: true,
//     centerMode: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     centerPadding: "300px",
//     infinite: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />
//   }

//   const settings = {
//     arrows: true,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />
//   };

//   return (
//     <>
//   <div className="lg:hidden">
//   <HeroSlider {...settings}>
//   {
//     images.map((image) => (
//       <div className="w-full h-64 md:h-80 py-3">
//       <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
//       alt="testing" className="w-full h-full rounded-md"/>
//       </div>
//     ))
//   }
//   </HeroSlider>
//   </div>

//   <div className="hidden lg:block">
//   <HeroSlider {...settingsLg}>
//   {
//     images.map((image) => (
//       <div className="w-full h-96 px-2 py-3">
//       <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
//       alt="testing" className="w-full h-full rounded-md"/>
//       </div>
//     ))
//   }
//   </HeroSlider>
//   </div>
//     </>
//   );
// };

// export default HeroCarousal;
