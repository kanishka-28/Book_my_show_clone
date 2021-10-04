import React from 'react'
import MovieNavbar from '../components/Navbar/movieNavbar.component';



//components

export default function MovieLayout(props) {
    return (
       <>
            {/* <h1 className="text-xl">Default layout page</h1> */}
            <div className="bg-kanishka-70">
            <MovieNavbar/>
            </div>
            {props.children}

        </>
    );
};
