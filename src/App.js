import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow/MovieRow';

export default function App(){
  const [movieList, setMovieList] = useState([]);
  useEffect(()=>{
    const loadAll = async ()=>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, [])
  console.log(movieList)
  return(
    <>
      <header></header>

      <section>
        {movieList.map((item, key) => (
          <div>
            <MovieRow title={item.title}/>
          </div>
        ))}
      </section>


    </>
  )
}