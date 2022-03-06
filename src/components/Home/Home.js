import './Home.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";


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
        // dispatch({ type: 'ADD_MOVIES', payload: { poster: urlInput } });
        // dispatch({ type: 'ADD_MOVIES', payload: { description: descriptionInput } });

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
        <h1
        id='welcome'
        >WELCOME TO <span id='watch-saga'>WATCH SAGA</span></h1>
    </div>
    </div>
    )

}; // end of MovieForm