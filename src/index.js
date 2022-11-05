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
import { takeEvery, put, take } from 'redux-saga/effects';
import axios from 'axios';



// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies)
    yield takeEvery('FETCH_DETAILS', fetchDetails)
    yield takeEvery('FETCH_GENRES', fetchGenres)
}

// function called when dispatch FETCH_MOVIES is caught
// makes an axios GET request to server and retrieves all movies
function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        // when GET is successful, dispatch SET_MOVIES with a payload
        // of all movies recieved from movies database
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }    
}

// function called when dispatch FETCH_DETAILS is caught
//  makes an axios GET request to server with specific ID 
function* fetchDetails (action){
    console.log('action is', action.payload)
    try {
        const details = yield axios.get(`api/movie/${action.payload}`);
        // when GET is successful, dispatch SET_CURRENT_MOVIE with a payload
        // of all details from movies database with that specific ID
        yield put({
            type: 'SET_CURRENT_MOVIE', 
            payload: details.data 
        })
    } 
    catch {
        console.log('error getting details')
    }
}

// function called when dispatch FETCH_GENRES is caught 
// makes axios GET request to server to retrieve genres for movie with specific ID 
function* fetchGenres (action) {
    console.log('in fetchGenres function')
    try{
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        // when GET is successful, dispatch SET_GENRE with a payload
        // of genres from genre database with that specific movie ID 
        yield put({
            type: 'SET_GENRE',
            payload: genres.data
        })
    }
    catch {
        console.log('error getting genres')
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// storing all movies from movies database
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// storing current movie info from movies database with specific ID 
const currentMovie = (state = {}, action) => {
    switch(action.type){
        case 'SET_CURRENT_MOVIE':
            return action.payload
    }
    return state
}

// storing current movie's genres from the genre database
const genres = (state = [], action) => {
    console.log('what is the genre', action.payload)
    switch (action.type) {
        case 'SET_GENRE':
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
        currentMovie,
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
