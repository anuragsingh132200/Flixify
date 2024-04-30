import React from 'react';
import "../App.css"
const Card = ({ movie }) => {
  return (
    <div className='card bg-[#162438] shadow-lg rounded-lg overflow-hidden w-80 h-auto m-8'>
      <img src={movie.moviemainphotos[0]} alt={movie.movietitle} className='card-image w-full h-64 object-cover transition-transform duration-500 ease-in-out' />
      <div className='p-4'>
        <h2 className='text-2xl text-[#fff] font-bold mb-2'>{movie.movietitle}</h2>
        <p className='text-[#fff]'>
          <span className="font-semibold">Languages:</span> {movie.movielanguages.join(', ')}
        </p>
        <p className='text-[#fff]'>
          <span className="font-semibold">Countries:</span> {movie.moviecountries.join(', ')}
        </p>
        <p className='text-[#fff]'>
          <span className="font-semibold">Genres:</span> {movie.moviegenres.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default Card;