import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import { ListMovies } from '../components';

const MovieList = () => {
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
    <ListMovies movies={moviesList} isLoading={loading} />
  );
};

export default MovieList;
