import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieListItems from '../MoveListItems/MovieListItems';


function MovieList() {

    const dispatch = useDispatch();
    // grabbing movies from movies reducer 
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <MovieListItems key = {movie.id} movie = {movie}/>                       
                    );
                })}

            </section>
        </main>

    );
}

export default MovieList;