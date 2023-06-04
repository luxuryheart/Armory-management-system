import React, { useState } from "react";
import axios from 'axios';
// function
import { register } from '../function/Register';

function Register() {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    password1: "",
    firstname: "",
    lastname: "",
    tel: 0,
    location: "",
    age: 0,
  });
  const [next, setNext] = useState(true);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const nextState =(e)=> {
    // if (data.email === '') {
    //     return alert('Email not blank!!')
    // }
    // if (data.username === '') {
    //     return alert('username not blank!!')
    // }
    if (data.password != data.password1) {
        return alert('Password not match!!')
    } else {
        setNext(false)
    }
  }


  const Submit = (e) => {
    e.preventDefault();
    register(data);
  };

  return (
    <div>
      {next ? (
        <div className="container-lg">
          <p>
            <h1 style={{ color: "green" }}>Register</h1>
          </p>
          <form className="form-control mt-3 p-3">
            <div className="mb-2">
              <label >Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label >Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label >Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label >Confirm Password</label>
              <input
                type="password"
                name="password1"
                placeholder="Enter your password"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                disabled={(data.password.length && data.password1.length) < 6}
                class="btn btn-primary"
                type="button"
                onClick={nextState}
              >
                next
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="container">
            <p>
              <h1 style={{ color: "green" }}>ข้อมูลส่วนตัว</h1>
            </p>
          <form className="form-control">
            <div className="mb-2">
              <label>First Name</label>
              <input
                type="text"
                name="firstname"
                value={data.firstname}
                placeholder="Enter your First Name"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={data.lastname}
                placeholder="Enter your Last Name"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Phone</label>
              <input
                type="number"
                name="tel"
                value={data.tel}
                placeholder="Enter your Phone"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Location</label>
              <textarea
                type="text"
                name="location"
                placeholder="Enter your Location"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Age</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your Age"
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
      )}
    </div>
  );
}

export default Register;
