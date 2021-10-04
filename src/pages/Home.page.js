import React, { useEffect, useState } from 'react'
import EntertainmentCardSlider from '../components/Entertainment/Entertainment.card.component'
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
import tempPosters from '../config/TempPosters.config';
import axios from 'axios';

export default function HomePage() {

    const [popularMovies, setpopularMovies] = useState([]);
    const [upcomingMovies, setupcomingMovies] = useState([]);
    const [topratedMovies, settopratedMovies] = useState([]);

    useEffect(() => {
        const getMovies=async()=>{
            // const data= await axios.get('/movie/popular');
            const data = await axios.get("/movie/popular");
            setpopularMovies(data.data.results);
        };
        const upcoming=async()=>{
            const data=await axios.get("/movie/upcoming");
            setupcomingMovies(data.data.results);
        }
        const toprated=async()=>{
            const data=await axios.get("/movie/top_rated");
            settopratedMovies(data.data.results);
        }

        upcoming();
        toprated();
        getMovies();
    }, [])

    // useEffect(()=>{
    //     const requestPopularMovies = async()=>{
    //         // const getPopularMovies = await axios.get("/movie/popular");
            // const getPopularMovies = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`)
    //         console.log(getPopularMovies);
    //         // setPopularMovies(getPopularMovies.data.results);
    //     }
    //     requestPopularMovies();
    // });
    
    // useEffect(async()=>{
    //     const getPopularMovies = await axios.get("/movie/popular");
    //     console.log(getPopularMovies);
    // }, []);



    return (
        <>
       <div className="flex flex-col gap-20">
       <div className="container mx-auto px-4" >
            <h1 className="text-2xl font-bold text-gray-800 py-2 ">The best of Entertainment</h1>
            
            <EntertainmentCardSlider/>
        </div>
        <div className="bg-navCol-200 py-16">
           
            <div className="container mx-auto px-4 flex flex-col ">
            <div className="flex">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full"/>
            </div>
            <PosterSlider images={popularMovies} title='Premiere' subtitle='Brand new release every Firday' isDark={true} />
            {/* <Premier /> */}

            </div>
        </div>

       </div>
       <div className="container mx-auto">

       <PosterSlider images={upcomingMovies} title='Online Streaming Events' subtitle='Brand new release every Firday' isDark={false} />
       <PosterSlider images={topratedMovies} title='Outdoor Events' subtitle='Brand new release every Firday' isDark={false} />
       </div>
        </>
    )
}
