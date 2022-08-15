import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.trim() && !password.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields',
      });
    } else if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email',
      });
    } else {
      try {
        const response = await axios.post(
          'http://challenge-react.alkemy.org/',
          {
            email,
            password,
          }
        );
        const token = response.data.token;
        localStorage.setItem('token', token);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You are logged in',
        });
        navigate('/list');
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.error,
        });
      }
    }
  };

  return (
    <div className='w-50 m-auto'>
      <h2>Login Form</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="emailInput" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
