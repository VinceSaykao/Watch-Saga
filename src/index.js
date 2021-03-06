import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('ADD_MOVIES', addAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenre);
}

// genre Saga
function* fetchGenre(action) {
    console.log(action.payload);
    try {
        const details = yield axios.get(`/api/genre/${action.payload}`);
        console.log(details.data);
        yield put ({type: 'SET_GENRES', payload: details.data});

    } catch {
        console.log('rut ro scoob');
    }
}; // end fetchGenre

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}


// SAGA function for fetching movies from database
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }
}; // end of fetchAllMovies

// SAGA generator function for adding movies, holds action
function* addAllMovies(action) {
    try {
        yield axios.post('/api/movie', action.payload);
        yield put({type: 'FETCH_MOVIES'});
    } catch(error) {
        console.log('posting in addAllMovies', error);
    }
}; // end of postAllMovies

// Reducer for the addAllMovies SAGA
const addAllMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'POST_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// create saga that has ${id}


const detailsReducer = (state = [], action) => {
    switch (action.type) {
        case 'DETAILS':
            return action.payload;
        default:
            return state;
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server || Movies Reducer
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        addAllMoviesReducer,
        detailsReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
