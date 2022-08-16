import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=casts`;

    setLoading(true);
    const getMovie = async () => {
      try {
        const response = await axios.get(endPoint);
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while fetching the movie. Please try again later',
        });
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [id]);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && movie && (
        <>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="img-fluid rounded-start h-100"
                  style={{ objectFit: 'cover' }}
                  alt={movie.title}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{movie.title}</h2>
                  <p className="card-text">{movie.overview}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Release date:{' '}
                      {new Date(movie.release_date).toLocaleDateString()}
                    </small>
                  </p>

                  <p className="card-text">
                    <small className="text-muted">Budget: {movie.budget}</small>
                  </p>

                  <p className="card-text">
                    <small className="text-muted">
                      Revenue: {movie.revenue}
                    </small>
                  </p>

                  <p className="card-text">
                    <small className="text-muted">
                      Runtime: {movie.runtime}
                    </small>
                  </p>

                  <p className="card-text">
                    <small className="text-muted">
                      Genres:{' '}
                      {movie.genres.map((genre) => genre.name).join(', ')}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">Cast</h2>
              <div className="row g-0">
                {movie.casts.cast.map((cast) => (
                  <div className="col-md-3 h-100" key={cast.id}>
                    <div className="card my-2">
                      <img
                        src={
                          cast.profile_path
                            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                            : 'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'
                        }
                        style={{ objectFit: 'cover' }}
                        className="img-fluid rounded-start h-100"
                        alt={cast.name}
                      />
                      <div className="card-body">
                        <p className="card-text">
                          {cast.name} as {cast.character}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">Crew</h2>
              <div className="row g-0">
                {movie.casts.crew.map((crew) => (
                  <div className="col-md-3" key={crew.id}>
                    <div className="card my-2">
                      <img
                        src={
                          crew.profile_path
                            ? `https://image.tmdb.org/t/p/w500/${crew.profile_path}`
                            : 'https://www.salisburyut.com/wp-content/uploads/2020/09/avatar-1-768x768.jpeg'
                        }
                        className="img-fluid rounded-start"
                        alt={crew.name}
                      />
                      <div className="card-body">
                        <p className="card-text">
                          {crew.name} as {crew.job}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

export default Detail;
