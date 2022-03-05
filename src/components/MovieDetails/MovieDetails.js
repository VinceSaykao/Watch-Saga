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
        <div>
            <div id='details'>

                <img src={details.poster} />
                <h1 id='detail-title'> {details.title} </h1>
                <p>{details.description}</p>

            </div>
            <br></br>
            <br></br>
            <button
                onClick={back}
            >BACK</button>

        </div>
    )

}