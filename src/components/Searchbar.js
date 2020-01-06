import React from 'react'

import '../assets/css/buscador.css'


function Searchbar(props) {
    return (
        <div className="buscadorContainer">
            <div>
                <form action="" onSubmit={props.handleSubmit}>
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={props.handleChange}/>
                </form>
            </div>
        </div>
    );
}

export default Searchbar