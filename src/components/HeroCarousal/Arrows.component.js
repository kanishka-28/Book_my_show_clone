import React from 'react';
import './Arrows.css'

export const NextArrow=(props)=>{
    // const{className,style,onClick}=props;
    return(
        <>
        <div className={props.className}
        style={{ ...props.style, 
            backgroundColor: "rgba(39, 40, 34, 0.5)",
           
            display:"flex",
            borderRadius:"6px",
            justifyContent:"center",
            // visibility: 'hidden',
            alignItems:"center",
            width:"2.5rem",
            height:"2.5rem"
        }}
        onClick={props.onClick}
        />
        </>
    )
}

export const PrevArrow=(props)=>{
    // const{className,style,}
    return(
        <>
        
            <div className={props.className}
            style={{ ...props.style,
                backgroundColor: "rgba(39, 40, 34, 0.5)",
               
                display:"flex",
                borderRadius:"6px",
                // visibility: 'hidden',
                justifyContent:"center",
                alignItems:"center",
                width:"2.5rem",
                height:"2.5rem"
            }}
            onClick={props.onClick}
            />
        </>
    )
}
