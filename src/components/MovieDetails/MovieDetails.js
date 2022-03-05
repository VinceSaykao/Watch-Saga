import { useSelector } from 'react-redux';
import './MovieDetails.css';
import { useHistory } from 'react-router-dom';
import React, {useEffect} from 'react';

export default function MovieDetails() {
    const details = useSelector(store => store.detailsReducer);

    useEffect(() => {
    }, []);

    const history = useHistory();

    function back() {
        history.push('/');
    }

    return (
        <div id='movie-details'>
            <div id='details'>

                <img src={details.poster} />
                <h1 id='detail-title'> {details.title} </h1>
                <p>{details.description}</p>

            </div>
           
            <button id='back-details'
                onClick={back}
            >BACK</button>

        </div>
    )

}