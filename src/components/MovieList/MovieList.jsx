import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';
import { Button } from '@material-ui/core/';
import Header from '../Header/Header.js';
import MovieDetails from '../MovieDetails/MovieDetails';
import Carousel from 'react-elastic-carousel';
import Card from './Card';


export default function MovieList() {
    let history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });

    }, []);

    // click add movie button will push user to movie form
    function addMovie() {
        history.push('/addMovie')
    }; // end of addMovie

    // pushing user to details on the specific movie poster 
    function clickThis(movie) {
        console.log(movie.id, movie);
        history.push('/details');
        dispatch({ type: 'DETAILS', payload: movie });
        dispatch({ type: 'FETCH_GENRES', payload: movie.id });
    }; // end of clickThis

    // breakpoints that changes how many items shows based on user browser width
    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 },
        { width: 1500, itemsToShow: 4 },
    ]

    return (
        <main>
            <Header />
            <Button
                id='button-add-movie'
                variant='contained'
                onClick={addMovie}
            >Add MOVIES</Button>
            {/* <h6 id='terms'>
By watching Watch Saga movies and TV series you agree to our Terms & Conditions 
</h6> */}
            <br></br>
            <h1 id='recently'>Trending Now</h1>
            <Carousel>

                <section className="movies">

                    {movies.map(movie => {
                        return (

                            <div key={movie.id}
                            >
                                <img
                                    className='movie-poster'
                                    onClick={() => clickThis(movie)}
                                    src={movie.poster} alt={movie.title} />

                            </div>
                        );
                    })}
                </section>
            </Carousel>

        </main>
    );
}
