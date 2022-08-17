import UnknownFilm from '../assets/images/unknown-film.png';
import { useAppContext } from '../contexts/appContext';
import FavoriteBtn from './FavoriteBtn';

const MovieDetailCard = ({ movie }) => {
  console.log(movie);
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : UnknownFilm;
  const title = movie.title ? movie.title : 'Unknown';
  const overview = movie.overview;
  const releaseDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString()
    : 'Unknown';
  const currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  const budget = movie.budget ? currencyFormat.format(movie.budget) : 'Unknown';
  const revenue = movie.revenue
    ? currencyFormat.format(movie.revenue)
    : 'Unknown';
  const runtime = movie.runtime ? `${movie.runtime} minutes` : 'Unknown';
  const generes =
    movie.genres.length > 0
      ? movie.genres.map((g) => g.name).join(', ')
      : 'Unknown';

  const { addOrRemoveFavorite, isMovieFavorite } = useAppContext();

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid rounded-start h-100 detail-movie-poster"
            alt={title}
          />
          <FavoriteBtn
            isFavorite={isMovieFavorite(movie.id)}
            onClick={() => addOrRemoveFavorite(movie)}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{overview}</p>
            <p className="card-text">
              <small className="text-muted">Release date: {releaseDate}</small>
            </p>

            <p className="card-text">
              <small className="text-muted">Budget: {budget}</small>
            </p>

            <p className="card-text">
              <small className="text-muted">Revenue: {revenue}</small>
            </p>

            <p className="card-text">
              <small className="text-muted">Runtime: {runtime}</small>
            </p>

            <p className="card-text">
              <small className="text-muted">Genres: {generes}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailCard;
