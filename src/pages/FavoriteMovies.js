import { ListMovies } from '../components';
import { useAppContext } from '../contexts/appContext';

const MovieList = () => {
  const { favoriteMovies } = useAppContext();

  return (
    <>
      {favoriteMovies.length !== 0 && (
        <h2>{favoriteMovies.length} favorite movies</h2>
      )}
      <br />
      <ListMovies movies={favoriteMovies} isLoading={false} />
    </>
  );
};

export default MovieList;
