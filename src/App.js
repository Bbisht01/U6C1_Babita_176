
import './App.css';
import { MoviesDashboard } from './components/MoviesDashboard';
import { Navbar } from './components/Navbar';
import {Home} from './components/Home'
import {About} from './components/About'
import {Route, Routes} from 'react-router-dom'
import { SingleMovieDetails } from './components/SingleMovieDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element = { <Home/> }/>
        <Route path= "/about" element = { <About/> }/>
        <Route path="/movies" element = { <MoviesDashboard/> }/>
        <Route path="/movies/:id" element = { <SingleMovieDetails/> }/>
      </Routes>
    </div>
  );
}

export default App;
