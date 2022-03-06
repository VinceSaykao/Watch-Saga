import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './MovieForm.css';

export default function MovieForm() {

    let history=useHistory();


    
    // local state that will be an empty string and be updated with new value upon user input
    const [movieInput, setMovieInput] = useState('');
    let [ urlInput, setUrlInput ] = useState('');
    let [descriptionInput, setDescriptionInput ] = useState('');

    const dispatch = useDispatch();


    // this function will dispatch to root-saga when submit is clicked
    function handleSubmit() {
        console.log('clicked');
        console.log(movieInput, urlInput, descriptionInput);

        dispatch({ type: 'ADD_MOVIES', payload: { title: movieInput, poster: urlInput, description: descriptionInput } });


        // clears input value after submit is pressed
        setMovieInput('');
        setUrlInput('');
        setDescriptionInput('');

        // will push user back to homepage
        history.push('/');
    }

    // cancels your inputs and brings user to homepage
    function handleCancel() {
        // will push user back to homepage
        history.push('/');

    }; // end of handleCancel

    return (
        <div id='form-back'>
    <div id='form-div'>
    <input 
    id='movie-input'
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
    
<ul>
    <li>
        <h3
        data-text="save"
        onClick={handleSubmit}
        >&nbsp;save</h3>
        </li>
        <li>
        <h3
        onClick={handleCancel}
        data-text="Cancel"
        >&nbsp;Cancel</h3>

        </li>
    </ul>
    </div>
    </div>
    )

}; // end of MovieForm