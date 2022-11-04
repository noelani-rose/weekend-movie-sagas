import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieListItems from '../MoveListItems/MovieListItems';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieListItems movie = {movie}/>                       
                    );
                })}

            </section>
        </main>

    );
}

export default MovieList;