import React, { useEffect, useState } from 'react'
import './App.css';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';

export default function App(){

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(()=>{
    const loadAll = async ()=>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      let originals = list.filter( e => e.slug === 'originals' );
      let randomNum = Math.floor(Math.random() * (originals[0].items.results.length) );
      let chosen = originals[0].items.results[randomNum];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }
    loadAll();
  }, [])

  return(
    <>
      <header></header>

      
      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section>
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items}/>
          </div>
        ))}
      </section>


    </>
  )
}