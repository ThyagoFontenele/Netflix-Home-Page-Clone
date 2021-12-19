import React from 'react';
import classes from './MovieRow.module.css';

export default function MovieRow({title, items}) {
    return(
        <div className={classes.movieRow}>
            <h2>{title}</h2>
            <div className={classes.movieRow_listArea}> 
                <div className={classes.movieRow_list}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className={classes.movieRow_item}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} className={classes.poster} alt={item.orignal_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}