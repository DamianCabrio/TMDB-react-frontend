import { Link } from 'react-router-dom';
import { maxWordsTruncate } from '../helpers/helpers';

import UnknownFilm from '../assets/images/unknown-film.png';

const ListMovieCard = ({ movie }) => {
  return (
    <div className="col mb-4" key={movie.id}>
      <div className="card h-100">
        <div className='card-img'>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : UnknownFilm
            }
            className="card-img-top"
            alt={movie.title}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{maxWordsTruncate(movie.overview, 40)}</p>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary mt-auto">
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListMovieCard;
