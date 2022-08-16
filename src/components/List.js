import { Navigate, Link } from 'react-router-dom';

const List = () => {
  const token = localStorage.getItem('token');
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
