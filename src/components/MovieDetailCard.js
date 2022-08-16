const MovieDetailCard = ({ movie }) => {
  return (
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
              <small className="text-muted">Budget: ${movie.budget}</small>
            </p>

            <p className="card-text">
              <small className="text-muted">Revenue: ${movie.revenue}</small>
            </p>

            <p className="card-text">
              <small className="text-muted">Runtime: {movie.runtime}</small>
            </p>

            <p className="card-text">
              <small className="text-muted">
                Genres: {movie.genres.map((genre) => genre.name).join(', ')}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailCard;
