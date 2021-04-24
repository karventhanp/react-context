import React,{useState,createContext} from 'react';
export const MovieContext=createContext();
export const MovieProvider=(props)=>{
    const [movie,setMovie]=useState([
        {
            id:1,
            name:'Bigil',
            price:150
        },
        {
            id:2,
            name:'Karnan',
            price:100
        },
        {
            id:3,
            name:'Kgf',
            price:200
        }
    ]);
    return(
            <MovieContext.Provider value={[movie,setMovie]}>
                {props.children}
            </MovieContext.Provider>
    );
}
