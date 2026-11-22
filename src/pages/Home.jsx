import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='bg-[#101410] text-[#F5F5EF] min-h-screen'>
        <section className="px-10 py-24">
            <p className="text-[#C6F15B] mb-4 tracking-widest">
                WELCOME TO MOVIE EXPLORER
            </p>
            <h1 className="text-6xl font-bold max-w-2xl leading-tight">
                Discover Your Next Favorite Movie
            </h1>
            <p className="text-[#A5AD9E]  mt-6 max-w-xl text-lg">
                  Explore thousands of movies, discover new stories
                  and find something amazing to watch.
            </p>
        </section>

    </div>
  )
}

export default Home