import React,{useContext} from 'react'
import {MovieContext} from '../MovieContext';

export default function Header() {
    const [movie,setMovie]=useContext(MovieContext);
    return (
        <div className='container-fixed-top'>
            <h4 className='text-center bg-secondary text-white p-2'>Movie Length : {movie.length}</h4>
        </div>
    )
}
