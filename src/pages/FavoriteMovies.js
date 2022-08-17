import { ListMovies } from '../components';
import { useAppContext } from '../contexts/appContext';

const MovieList = () => {
  const { favoriteMovies } = useAppContext();

  return <ListMovies movies={favoriteMovies} isLoading={false} />;
};

export default MovieList;
