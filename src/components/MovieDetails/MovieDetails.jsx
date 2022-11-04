import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function MovieDetails () {
    const dispatch = useDispatch();

    const currentMovie = useSelector(store => store.currentMovie)
    console.log('the current movie is', currentMovie)



    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAILS',
            // how do i give it the id? 
            // payload: id of the movie selected
        })
    }, [])
    




    return (
        <h3>movie details</h3>
    )
}

export default MovieDetails;