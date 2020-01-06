import React from 'react'
import '../assets/css/navbar.css'

function Navbar() {
    return (
        <div className="navBarDiv">
            <header>
                <nav>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" href="../../public/index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Log In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign Up</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar