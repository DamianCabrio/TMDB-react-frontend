import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

import { ListMovies } from '../components';


const MoviesSearchResults = () => {
  const { keyword } = useParams();

  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${keyword}&page=1`;

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
  }, [keyword]);

  return <ListMovies movies={moviesList} isLoading={loading} />;
};

export default MoviesSearchResults;
