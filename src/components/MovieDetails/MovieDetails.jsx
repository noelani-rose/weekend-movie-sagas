import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';



function MovieDetails () {
    const dispatch = useDispatch();


    const currentMovie = useSelector(store => store.currentMovie)
    console.log('the current movie is', currentMovie)



    // useEffect(() => {
    //         dispatch({
    //             type: 'FETCH_DETAILS',
    //             payload: currentMovie[0].id         // how do i give it id from here? 
    //         })
        
    // }, [])

    
    
    // why isn't this rendering??
    return (
        <>
            <h3>movie details</h3>
                 {currentMovie[0].title}
                {currentMovie[0].description}<br></br>
                <img src = {currentMovie[0].poster}
                 /> 
          
        </>
    )
}

export default MovieDetails;