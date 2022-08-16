import { Navigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import { maxWordsTruncate } from '../helpers/helpers';
import LoadingSpinner from './LoadingSpinner';

const List = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;

    setLoading(true);
    const getMovies = async () => {
      try {
        const response = await axios.get(endPoint);
        setMoviesList(response.data.results);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while fetching the movies. Please try again later',
        });
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && moviesList.length === 0 && (
        <div className="d-flex justify-content-center">
          <h3>No movies found</h3>
        </div>
      )}
      {!loading && moviesList.length > 0 && (
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
                  <Link
                    to={`/movie/${movie.id}`}
                    className="btn btn-primary mt-auto"
                  >
                    See more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default List;
