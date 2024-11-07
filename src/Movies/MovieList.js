import React from 'react';
import {useNavigate,Link} from 'react-router-dom'

export default function MovieList(props) {
  const navi=useNavigate()
  const movieClick=id=>{
    navi(`movies/${id}`)
  }
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails 
        link={<Link to={`movies/${movie.id}`}>details</Link>}
        movieClick={movieClick(movie.id)} 
        key={movie.id} 
        movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const {movieClick,link}=props

  return (
    <div className="movie-card" onClick={movieClick}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {link}
    </div>
  );
}
