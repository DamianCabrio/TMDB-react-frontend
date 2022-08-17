import { Route, Routes } from 'react-router-dom';

import { Footer, Header, ProtectedRoute } from './components';
import { Login, MovieDetail, MoviesList, MoviesSearchResults, FavoriteMovies } from './pages';

import './css/bootstrap.min.css';
import './css/app.css';
import { AppProvider } from './contexts/appContext';

function App() {
  return (
    <AppProvider>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/movie-list"
              element={<ProtectedRoute element={<MoviesList />} />}
            />
            <Route
              path="/movie/:id"
              element={<ProtectedRoute element={<MovieDetail />} />}
            />
            <Route
              path="/search/:keyword"
              element={<ProtectedRoute element={<MoviesSearchResults />} />}
            />
            <Route
              path="/favorite-movies"
              element={<ProtectedRoute element={<FavoriteMovies />} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
