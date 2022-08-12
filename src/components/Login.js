const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email.trim() && !password.trim()) {
      console.log('Email and password are required');
    } else if (!emailRegex.test(email)) {
      console.log('Email is invalid');
    } else if (email !== 'challenge@alkemy.org' || password !== 'react') {
      console.log('Email or password are incorrect');
    } else {
      console.log('Login successful');
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
