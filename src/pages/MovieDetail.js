import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

import { CrewTable, LoadingSpinner, MovieDetailCard } from '../components';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=casts`;

    setLoading(true);
    const getMovie = async () => {
      try {
        const response = await axios.get(endPoint);
        setMovie(response.data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while fetching the movie. Please try again later',
        });
        navigate('/movie-list');
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [id, navigate]);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && movie && (
        <>
          <MovieDetailCard movie={movie} />
          {movie.casts.cast.length > 0 && (
            <CrewTable crewList={movie.casts.cast} isCast={true} />
          )}
          {movie.casts.crew.length > 0 && (
            <CrewTable crewList={movie.casts.crew} isCast={false} />
          )}
        </>
      )}

      {!loading && !movie && (
        <div className="d-flex justify-content-center">
          <h3>No movie found</h3>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
