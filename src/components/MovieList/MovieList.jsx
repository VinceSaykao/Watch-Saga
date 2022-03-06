import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';
import { Button } from '@material-ui/core/';
import Header from '../Header/Header.js';
import MovieDetails from '../MovieDetails/MovieDetails'


export default function MovieList() {
    let history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });

    }, []);

    function addMovie() {
        history.push('/addMovie')
    }; // end of addMovie

    function clickThis(movie) {
        console.log(movie.id, movie);
        history.push('/details');
        dispatch({ type: 'DETAILS', payload: movie });
        dispatch({ type: 'FETCH_GENRES', payload: movie.id });
    }; // end of clickThis



    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };


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
            <h1 id='recently'>Recently Added</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id}
                        // onMouseEnter={onHover}
                        // onMouseLeave={onLeave}
                        // role="button"
                        // tabIndex="-3"

                        >
                            <img


                                onClick={() => clickThis(movie)}
                                src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
                {/* {hover ? "SKILLS" : <MovieDetails />} */}
            </section>
        </main>
    );
}
