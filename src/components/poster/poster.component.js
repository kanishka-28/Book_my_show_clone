import React from 'react'
//props src, title, sub-title, isDark(boolean)
export default function Poster(props) {
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-3 ">
        <div className="h-50">
        <img src={props.poster_path!=null?`https://image.tmdb.org/t/p/original${props.poster_path}`:`https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg`} alt={props.title} className="w-full h-full rounded-xl"/>
        </div>

        <h3 className={`text-lg font-bold ${
            props.isDark?"text-white":"text-gray-700"
        }`}>
            {props.title}
            </h3>
        {props.subtitle && <p
        className={`text-md font-bold ${
            props.isDark?"text-white":"text-gray-700"
        }`}
        >{props.subtitle}</p> }
        {props.overview && <p
        className={`text-sm ${
            props.isDark?"text-white":"text-gray-700"
        }`}
        >{props.overview.slice(0,50) + "..."}</p> }
        </div>
            
        </>
    )
}
