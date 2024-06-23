'use client';

import { useState } from "react";
import styles from './finder.module.css'

export default function Finder() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    //Function to handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (query.trim() === '') return;

        try {
            //Send a GET request to the unsplash API with the query
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=kLS0CwL0FCxor4vBDiRSSAom7JnNeQd1h6503pKJEt0`)

            //Extract JSON response 
            const data = await response.json();

            //Update the results state with the fetched data
            setResults(data.results)
        } catch (error) {
            console.log('Error fetching data:', error)
        }
    }

    // JSX to render the finder component
    return (
        <div className={styles}>
            <h1 className={styles.title}>Photo Finder</h1>
            {/* Form for user input */}
            <form id="search-form" onSubmit={handleSubmit} className={styles.form}>
                <input type="text" id="search-query" placeholder="Search for photos" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {/* Display search results */}
            <div id="results" className={styles.results}>
                {/* Map over results and render images */}
                {results.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.urls.regular}
                        alt={photo.alt_description} />
                ))}
            </div>
        </div>
    )
}