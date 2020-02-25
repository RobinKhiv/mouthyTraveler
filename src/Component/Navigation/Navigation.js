import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <React.Fragment>
        <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark" >
            <Link to="home" class="navbar-brand">
               Mouthful  
              {/* <img src="https://mouthfuloftravel.files.wordpress.com/2018/03/cropped-mouthful-of-travel-02.jpg" alt="banner"/>
             */}
            </Link> 
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
              <Link to='' class="nav-link">Home</Link>
            </li>
            <li class="nav-item">

            <Link to='' class="nav-link">Travel</Link>
            </li>
            <li class="nav-item">
            <Link to='/about' class="nav-link">About Me</Link>
                
            </li>
            <li class="nav-item">
            <Link to='' class="nav-link">Restaurants</Link>
                
                </li>
                <li class="nav-item">
                
            <Link to='' class="nav-link">Guides</Link>
                </li>
                <li class="nav-item">
            <Link to='' class="nav-link">Events</Link>
                
                </li>
            <Link to='' class="nav-link">Festivals</Link>
            </ul>
            </div>
        </nav>
        
        </React.Fragment>
    )
}
