import React, { useState } from "react";

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/login`, values)
    .then(res => {
        if(res.data.Status === 'Success') {
            alert('Login success');
           
        } else {
            alert(res.data.Error);
            console.log(err)
        }
    })
    .catch(err => {
        console.log(err);
    })
  };

  return (
    <div className="container">
      <p>
        <h1 style={{ color: "green" }}>Login</h1>
      </p>
      <form className="form-control">
        <div className="mb-2">
          <label>Email</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label>Username</label>
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-success" type="submit" onClick={Submit}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
