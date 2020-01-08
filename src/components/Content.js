import React from 'react'
import Movies from './Movies'

import '../assets/css/contenido.css'

function Content(props) {
    return (
        <div className="container1">
            <div className="container2">
                {
                    props.movies.map((movie, i) =>{
                        console.log('peliculas');
                        if(movie.poster_path != null && movie.adult == false){
                            console.log('buenas');
                            return (
                                <Movies key={i} image={movie.poster_path} adult={movie.adult}/>
                                /* poster_path -> para obtener la imagen (Codigo API) */
                            )
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Content