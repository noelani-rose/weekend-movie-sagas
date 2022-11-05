import {Link, useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MovieListItems ({movie}) {

    return (


        <>
        <Link  to = {`/details/${movie.id}`}>
            <div key={movie.id} >      
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title}/>
            </div>
         </Link>

        </>
    )
}

export default MovieListItems;