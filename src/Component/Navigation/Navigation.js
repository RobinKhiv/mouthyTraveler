import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <Link to=''>Home</Link>
            <Link to=''>Travel</Link>
            <Link to=''>About Me</Link>
            <Link to=''>Restaurants</Link>
            <Link to=''>Guides</Link>
            <Link to=''>Events</Link>
            <Link to=''>Festivals</Link>
        </nav>
    )
}
