import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


export default function MovieForm() {

    // local state that will be an empty string and be updated with new value upon user input
    const [movieInput, setMovieInput] = useState('');

    const dispatch = useDispatch();

    // this function will dispatch to root-saga when submit is clicked
    function handleSubmit() {
        console.log('clicked');
        console.log(movieInput);

        dispatch({ type: 'FETCH_MOVIES', payload: { movieInput: movieInput } });
        setMovieInput('');

    }

    return (
    <div>
    <input 
    value={movieInput}
    onChange={evt => setMovieInput(evt.target.value)}
    
    />
    <button
    onClick={handleSubmit}
    >
        Submit
    </button>
    </div>
    )

}; // end of MovieForm