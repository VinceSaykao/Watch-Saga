import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieForm from '../MovieForm/MovieForm';
import MovieDetails from '../MovieDetails/MovieDetails';


function App() {
  return (
    <div className="App">
      <Router>        
        <Route path="/addMovie" exact>
          <MovieForm />
        </Route>
        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details" exact>
          <MovieDetails />
        </Route>

      </Router>
    </div>
  );
}


export default App;
