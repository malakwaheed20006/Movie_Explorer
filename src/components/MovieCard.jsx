import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard(props) {
  return (
    
    <>
    <div className="bg-[#4c5f45] rounded-xl overflow-hidden">
        <img 
        src={props.movie.poster}
        alt={props.movie.title}
        className='w-full h-72 object-cover' />
        <div className="p-4">
            <h2 className="text-[#F5F5EF] text-xl font-bold">
                {props.movie.title}
            </h2>
            <p className="text-[#A5AD9E] mt-2">
                Rating:{props.movie.rating}
            </p>
            <Link
            to={`/movies/${props.movie.id}`}
            className='inline-block mt-4 text-[#C6F15B]'
            
            >View Details</Link>
        </div>
    </div>
    </>
  )
}

export default MovieCard