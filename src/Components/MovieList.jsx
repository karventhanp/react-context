import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext';
export default function MovieList() {
    const [movie,setMovie] = useContext(MovieContext);
    return (
        <div>
            {
                movie.map((m, i) => (
                    <div key={i}>
                        <h4 className='text-center'>{m.name}</h4>
                        <p className="text-center">Rs.{m.price}</p>
                    </div>
                ))
            }
        </div>
    )
}
