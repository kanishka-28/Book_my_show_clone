import React from 'react'

import {BiShareAlt} from "react-icons/bi";
import {ImHeart, ImShare2} from "react-icons/im";
import {IoShareSocialOutline} from "react-icons/io";

export default function MovieHero() {

    return (
        <>
            <div className='md:hidden' style={{ height: 'calc(50vw)' }}>
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster" />

            </div>

            <div className='hidden md:block lg:hidden' style={{ height: 'calc(60vw)' }}>
                <img
                    src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                    alt="poster"
                />
            </div>




            <div className='relative hidden lg:block' style={{ height: '35rem' }} >

                <div className='absolute h-full w-full z-10'
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}
                />
                <div className='absolute w-64 z-30 h-96 left-28 top-20 w-12 rounded-2xl' >
                    <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster"
                        className='h-full w-full rounded-2xl'
                    />
                </div>
                <div className="absolute z-20 left-1/3  top-20 w-1/3 h-full text-white">
                    <h1 className="text-4xl font-bold">Shang-Chi and the Legend of the Ten Rings</h1>
                    <span className="flex mt-2 "><ImHeart size="2rem" color="red"/><h1 className="mx-2 text-2xl">91%</h1><p className="mx-1 py-2">32.6k ratings</p></span>
                    <div className="flex bg-blacky-700 p-2 rounded-md my-2 justify-between ">
                        <div>
                            <h3 className="text-xl">Add your ratings and review</h3>
                            <p>your reviews matter</p>
                        </div>
                        <button className="bg-white text-black w-24 h-8.5 m-1 rounded-md"><strong>Rate Now</strong></button>
                    </div>
                    <h3 className="bg-white text-black my-2 rounded-sm w-max p-1">2d, 3D, IMAX 2D, MX4D, 4DX</h3>
                    <h3 className="bg-white text-black my-2 rounded-sm w-max p-1 ">English, Kannada, Tamil, Hindi, Telugu, Malayalam</h3>
                    <h3 className="mt-4">2h 12m • Action, Adventure , Fantasy • UA • 3 Sep, 2021</h3>
                    <button className="bg-red-500 px-12 text-white w-auto h-12 my-4 rounded-md"><strong>Book Tickets</strong></button>
                </div>
                <div className="absolute z-20 right-20 left-76 top-10">
                    
                    <button className="bg-blacky-800 opacity-70 px-4 text-white w-auto h-12 my-4 rounded-sm flex p-2">
                    <p className="p-1"><BiShareAlt size="1.5rem"/></p><strong className="px-2">Share</strong>
                    </button>
                </div>
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" alt="poster"
                    className='w-full h-full rounded-xl' />
            </div>

        </>
    )
}
