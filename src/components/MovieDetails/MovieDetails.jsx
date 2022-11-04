import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';



function MovieDetails () {
    const dispatch = useDispatch();
    const params = useParams();

    const currentMovie = useSelector(store => store.currentMovie)
    console.log('the current movie is', currentMovie)



    useEffect(() => {
            dispatch({
                type: 'FETCH_DETAILS',
                payload: params.id       // how do i give it id from here? 
            })
        
    }, [])

    // {currentMovie.length > 0 && currentMovie.title}
    
    // why isn't this rendering??
    return (
        <>
        {currentMovie && currentMovie.tiel}
            <h3>movie details </h3> 
                {currentMovie.title}
                {currentMovie && currentMovie.description} <br></br>
                <img src = {currentMovie.poster}
                 /> 
          
        </>
    )
}

export default MovieDetails;