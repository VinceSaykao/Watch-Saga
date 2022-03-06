import { useSelector } from 'react-redux';
import './MovieDetails.css';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function MovieDetails() {
    const details = useSelector(store => store.detailsReducer);
    const genre = useSelector(store => store.genres);
    useEffect(() => {
    }, []);

    const history = useHistory();

    function back() {
        console.log('back')
        history.push('/');
    }

    return (
        <div id='movie-details'>
                <CloseIcon 
                id='close-icon'
                onClick={back}
                />
            <div id='details'>

                <img 
                onClick={back}
                className='detail-poster'
                src={details.poster} />
                <div className='genre-map'>
                {genre.map(item => (
                    <div key={item.id}>
                        <div
                            className='genre-names'
                        >{item.name}</div>
                    </div>
                ))}
                </div>


                <h1 id='detail-title'> {details.title} </h1>
                <p>{details.description}</p>
            </div>

        




        </div>
    )

}