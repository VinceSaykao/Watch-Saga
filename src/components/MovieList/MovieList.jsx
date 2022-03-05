import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

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
        dispatch({ type: 'DETAILS', payload: movie});
        dispatch({type: 'FETCH_GENRES', payload: movie.id});

    }

    return (
        <main>
            <button
                onClick={addMovie}
            >Add A Movie</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                            onClick= {() => clickThis(movie)}
                            src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;