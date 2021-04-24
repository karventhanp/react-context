import React from 'react'
import { MovieProvider } from './MovieContext';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import Header from './Components/Header';
export default function App() {
  return (
    <MovieProvider>
      <div className='app'>
        <Header/>
        <AddMovie/>
        <MovieList/>
      </div>
    </MovieProvider>

  )
}
