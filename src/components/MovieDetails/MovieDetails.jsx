import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';



function MovieDetails () {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const currentMovie = useSelector(store => store.currentMovie)
    const movieGenre = useSelector(store => store.genres)
    console.log('the current movie is', currentMovie)



    useEffect(() => {
            dispatch({
                type: 'FETCH_DETAILS',
                payload: params.id    
            })
            dispatch({
                type: 'FETCH_GENRES',
                payload: params.id
            })
        
    }, [params.id])
    

    return (
        <>
            <h3>Movie Details </h3> 
                <div className='movieTitle' >
                    <h2>{currentMovie.title}</h2>
                </div>
                <div className='movieGenre'>
                    {movieGenre.map(genre => (
                        <div key = {genre.name}>{genre.name}</div>
                    ))}
                </div>
                <img src = {currentMovie.poster}/> <br></br>
                <div className='movieDescription'>
                    {currentMovie.description}
                </div>
                <br></br>
                <Button 
                sx = {{marginTop: "1em"}}
                variant = "outlined"
                className = "backButton"
                onClick = {() => {history.push('/')}}>
                    Back to Movie List
                </Button>


        </>
    )
}

export default MovieDetails;