import React from 'react';
import classes from './FeaturedMovie.module.css'

export default function FeaturedMovie({item}) {

    const point = Number(item.vote_average)*10

    let date = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    
    return(
        <section className={classes.featured} style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,

            }} >

            <div className={classes.featured_vertical}>
                <div className={classes.featured_horizontal}>
                    <div className={classes.featured_name}>{item.name}</div>
                    <div className={classes.featured_info}>
                        <div className={classes.featured_points}> {point}% relevante </div>
                        <div className={classes.featured_year}>{date.getFullYear()}</div>
                        <div className={classes.featured_seasons}>{item.number_of_seasons} temporada{item.number_of_seasons === 1 ? '' : 's'}</div>
                    </div>
                    <div className={classes.featured_description}>{item.overview}</div>
                    <div className={classes.featured_buttons}>
                        <a href={`/watch/${item.id}`} className={classes.featured_watchButton} >► Assistir</a>
                        <a href={`/list/add/${item.id}`} className={classes.featured_myListButton} >+ Minha Lista</a>
                    </div>
                    <div className={classes.featured_genres}><strong>Gêneros:</strong> {genres.join(", ")}</div>
                </div>
            </div>
        </section >
    )
}