import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


export default function MovieForm() {

    // local state that will be an empty string and be updated with new value upon user input
    const [movieInput, setMovieInput] = useState('');
    let [ urlInput, setUrlInput ] = useState('');
    let [descriptionInput, setDescriptionInput ] = useState('');

    const dispatch = useDispatch();

    // this function will dispatch to root-saga when submit is clicked
    function handleSubmit() {
        console.log('clicked');
        console.log(movieInput, urlInput, descriptionInput);

        dispatch({ type: 'ADD_MOVIES', payload: { movieInput: movieInput } });
        dispatch({ type: 'ADD_MOVIES', payload: { urlInput, urlInput } });
        dispatch({ type: 'ADD_MOVIES', payload: { descriptionInput, descriptionInput } });

        // clears input value after submit is pressed
        setMovieInput('');
        setUrlInput('');
        setDescriptionInput('');

    }

    return (
    <div>
    <input 
    value={movieInput}
    onChange={evt => setMovieInput(evt.target.value)}
    
    />

    <input 
    value={urlInput}
    onChange={evt => setUrlInput(evt.target.value)}
    />

    <textarea 
    value={descriptionInput}
    onChange={evt => setDescriptionInput(evt.target.value)}
    />
    
    <button
    onClick={handleSubmit}
    >
        Submit
    </button>
    </div>
    )

}; // end of MovieForm