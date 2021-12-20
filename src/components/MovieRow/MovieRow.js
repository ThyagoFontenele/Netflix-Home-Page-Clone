import React, { useState } from 'react';
import classes from './MovieRow.module.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
export default function MovieRow({title, items}) {

    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }


    return(

        <div className={classes.movieRow}>
            <h2>{title}</h2>

            <div className={classes.movieRow_left} onClick={handleLeftArrow} >
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>


            <div className={classes.movieRow_right } onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>


            <div className={classes.movieRow_listArea}> 

                <div className={classes.movieRow_list} style={{ 
                    marginLeft: scrollX,
                    width: items.results.length * 150,
                    transition: 'all ease 0.4s'
                }}>

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