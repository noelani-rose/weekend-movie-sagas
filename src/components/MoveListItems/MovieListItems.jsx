import {Link, useHistory} from 'react-router-dom'
import MovieDetails from '../MovieDetails/MovieDetails';


function MovieListItems ({movie}) {

    const getDetails 

    return (


        <>
        <Link to = {`/details/${movie.id}`}>
            <div key={movie.id} >      
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title}/>
            </div>
         </Link>

        </>
    )
}

export default MovieListItems;