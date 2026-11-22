import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import api from '../services/api';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search,setSearch]=useState('')


  useEffect(() => {
    setLoading(true)
    let url='/movie/popular'
    let params={}
    if(search.trim()!==''){
        url='/search/movie'
        params={query:search}
    }
    api.get(url,{params})
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [search]);

  return (
    <div className="bg-[#101410] min-h-screen px-10 py-8">
      <h1 className="text-4xl font-bold text-[#F5F5EF]">
        Explore Movies
      </h1>

      <p className="text-[#A5AD9E] mt-3 mb-8">
        Discover movies and find your next favorite story.
      </p>
      <input
       type="text"
       placeholder='Search for movie...'
       value={search}
       onChange={(e)=>setSearch(e.target.value)}
        className="w-full md:w-1/2 p-3 ronded-lg bg-[#252D22] text-white border border-[#A5AD9E] mb-8 outline-none" />

      {loading ? (
        <p className="text-[#C6F15B]">Loading movies...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={{
                id: movie.id,
                title: movie.title,
                rating: movie.vote_average,
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;