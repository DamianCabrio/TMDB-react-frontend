import { Navigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { maxWordsTruncate } from '../helpers/helpers';

const List = () => {
  const token = localStorage.getItem('token');

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;

    const getMovies = async () => {
      const response = await axios.get(endPoint);
      setMoviesList(response.data.results);
    };
    getMovies();
  }, []);

  if (!token) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {moviesList.map((movie) => (
        <div className="col mb-4" key={movie.id}>
          <div className="card h-100">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="card-img-top"
              alt={movie.title}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                {maxWordsTruncate(movie.overview, 40)}
              </p>
              <Link to={`/movie/${movie.id}`} className="btn btn-primary mt-auto">
                See more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
