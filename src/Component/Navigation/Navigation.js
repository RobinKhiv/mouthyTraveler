import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <React.Fragment>
        <nav>
            <Link to=''>Home</Link>
            <Link to=''>Travel</Link>
            <Link to=''>About Me</Link>
            <Link to=''>Restaurants</Link>
            <Link to=''>Guides</Link>
            <Link to=''>Events</Link>
            <Link to=''>Festivals</Link>
        </nav>
        <Link to="home">
            <img src="https://mouthfuloftravel.files.wordpress.com/2018/03/cropped-mouthful-of-travel-02.jpg" alt="banner"/>
        </Link>
        </React.Fragment>
    )
}
