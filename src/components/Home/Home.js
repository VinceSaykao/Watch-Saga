import './Home.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


export default function MovieForm() {

    let history = useHistory();



    // local state that will be an empty string and be updated with new value upon user input
    const [movieInput, setMovieInput] = useState('');
    let [urlInput, setUrlInput] = useState('');
    let [descriptionInput, setDescriptionInput] = useState('');

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

    function moveMovie() {
        history.push('/');

    }


    return (
        <div id='home-back'>
            <div id='home-div'
                onClick={moveMovie}>
                <h1
                    id='welcome'
                >Welcome Back, Ready To <span id='watch-saga'
                    onClick={moveMovie}
                >WATCH SAGA?</span></h1>



            </div>
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                
            </div>

        </div>
    )

}; // end of MovieForm