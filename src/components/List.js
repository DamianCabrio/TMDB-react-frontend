import { Navigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
  const token = localStorage.getItem('token');

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;
    
    const getMovies = async () => {
      const response = await axios.get(endPoint);
      setMoviesList(response.data.results);
    }
    getMovies();
  }, []);


  if (!token) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to="/" className="btn btn-primary">
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
