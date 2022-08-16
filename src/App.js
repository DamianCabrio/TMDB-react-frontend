import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import List from './components/List';
import Detail from './components/Detail';
import Header from './components/Header';
import Footer from './components/Footer';

import './css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/movie-list" element={<List />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
