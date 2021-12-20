import React, { useEffect, useState } from 'react'
import './App.css';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';

export default function App(){

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 20){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return(
    <>

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items}/>
          </div>
        ))}
      </section>
      <footer>
        <h3>Feito por Thyago Fontenele - 2021 December</h3>
        <h3>Direitos de imagem para Netflix</h3>
        <h3>Dados pegos do site Themoviedb.org</h3>
      </footer>

    </>
  )
}