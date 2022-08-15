import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
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
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You are logged in',
        });
        console.log(response.data);
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
    <>
      <h2>Login Form</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Email:</span> <br />
          <input type="email" placeholder="Email" name="email" />
        </label>
        <br />
        <label>
          <span>Password:</span> <br />
          <input type="password" placeholder="Password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
