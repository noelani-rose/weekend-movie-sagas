import {Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MovieListItems ({movie}) {
    const dispatch = useDispatch();

    const getDetails = () => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movie.id
        })
    }

    return (


        <>
        <Link onClick = {getDetails} to = {`/details/${movie.id}`}>
            <div key={movie.id} >      
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title}/>
            </div>
         </Link>

        </>
    )
}

export default MovieListItems;