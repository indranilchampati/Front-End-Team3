import axios from 'axios';
import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    name: '',
    password:''
  }

  handleSubmit = event => {

    event.preventDefault();

    const user = {
      name: "abc",
      password: "qwery"
    };
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        if(res.status===201){
          window.location.replace("/dashboard");
        }
        console.log(res);
        console.log(res.data);

      })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            name="user_id" 
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password" 
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot 
        </p>
      </form>
    )
  }
}