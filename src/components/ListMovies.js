import { ListMovieCard, LoadingSpinner } from './';

const ListMovies = ({ movies, isLoading }) => {
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && movies.length === 0 && (
        <div className="d-flex justify-content-center">
          <h3>No movies found</h3>
        </div>
      )}
      {!isLoading && movies.length > 0 && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {movies.map((movie) => (
            <ListMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListMovies;
