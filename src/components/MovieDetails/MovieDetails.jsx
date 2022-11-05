import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';



function MovieDetails () {
    const dispatch = useDispatch();
    const params = useParams();

    const currentMovie = useSelector(store => store.currentMovie)
    const movieGenre = useSelector(store => store.genres)
    console.log('the current movie is', currentMovie)



    useEffect(() => {
            dispatch({
                type: 'FETCH_DETAILS',
                payload: params.id       // how do i give it id from here? 
            })
            dispatch({
                type: 'FETCH_GENRES',
                payload: params.id
            })
        
    }, [params.id])

    // {currentMovie.length > 0 && currentMovie.title}
    
    // why isn't this rendering??
    return (
        <>
            <h3>Movie Details </h3> 
                <div className='movieTitle' >{currentMovie.title}</div>
                <div className='movieDescription'>{currentMovie.description}</div> <br></br>
                <img src = {currentMovie.poster}/> 
                {movieGenre.map(genre => (
                    <div className='movieGenre' key = {genre.name}>{genre.name}</div>
                ))}
          
        </>
    )
}

export default MovieDetails;