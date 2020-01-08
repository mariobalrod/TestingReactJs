import React from 'react'

import '../assets/css/contenido.css'

var Movies = (props) => {

    return (
        <div className="cardMovie">
            <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image"/>
        </div>
    )

    /*(props.image != null && props.adult == false) ? <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image"/> : document.removeChild('props.id')*/
}
export default Movies
