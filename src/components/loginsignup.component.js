import React, { Component } from "react";
import uuid from "uuid";
import { Link } from "react-router-dom";

export default class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      user =>
        user.email === this.state.email && user.password === this.state.password
    );
    if (!user) {
      alert("User does not exist");
      return;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));

    this.setState({
      email: "",
      password: ""
    });

    this.props.history.push("/create");
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Log In? </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create"
              disabled={!this.state.email || !this.state.password}
              className="btn btn-primary"
            />
          </div>

          <div>
            new user ? <Link to={"/signup"}>SignUp</Link>
          </div>
        </form>
      </div>
    );
  }
}
