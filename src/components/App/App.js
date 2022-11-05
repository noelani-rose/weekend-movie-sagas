import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>Movies</h1>
      </header>

      <Router>        
        <Route path="/" exact>
          <p>Select movie for details</p>
          <MovieList />
        </Route>
        
        {/* Details page */}
          <Route exact path = "/details/:id">
            <MovieDetails />
          </Route>

      </Router>
    </div>
  );
}


export default App;
