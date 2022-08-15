import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const List = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return <h2>List</h2>;
};

export default List;
