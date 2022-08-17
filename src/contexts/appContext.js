import { createContext, useContext, useState } from 'react';

const AppContext = createContext();
export default AppContext;

const AppProvider = ({ children }) => {
  const getFavoriteMovies = () => {
    return JSON.parse(localStorage.getItem('favs')) || [];
  }
  const [favoriteMovies, setFavoriteMovies] = useState(getFavoriteMovies());

  const addOrRemoveFavorite = (movie) => {
    const favMovies = getFavoriteMovies();
    const parsedMovie = {
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
    };

    const index = favMovies.findIndex((fav) => fav.id === parsedMovie.id);
    if (index === -1) {
      favMovies.push(parsedMovie);
    } else {
      favMovies.splice(index, 1);
    }
    localStorage.setItem('favs', JSON.stringify(favMovies));
    setFavoriteMovies(favMovies);
  };

  const isMovieFavorite = (id) => {
    const favMovies = getFavoriteMovies();
    return favMovies.findIndex((fav) => fav.id === id) !== -1;
  }

  const providedValue = {
    addOrRemoveFavorite,
    isMovieFavorite,
    favoriteMovies,
  };

  return (
    <AppContext.Provider value={providedValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
