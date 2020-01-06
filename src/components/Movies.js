import React from 'react'

import '../assets/css/contenido.css'

const Movies = (props) => {
    return (
        <div className="cardMovie">
            {
                (props.image != null && props.adult == false) ? <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image"/> : null
            }
        </div>
    )
}

export default Movies
