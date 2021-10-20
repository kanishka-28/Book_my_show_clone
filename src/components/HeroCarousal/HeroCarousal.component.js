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
