import React, { Component } from "react";
import uuid from "uuid";
import { Link } from "react-router-dom";

export default class SignupUser extends Component {
  constructor(props) {
    super(props);

    const loggedIn = JSON.parse(localStorage.getItem("currentUser"));
    console.log("log", loggedIn);
    if (loggedIn) {
      this.props.history.push("/");
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
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

    if (!this.state.email.includes('@')) {
      alert("invalid email");
      return
    }
    const emailRegex = new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$');
    const isemailOk = emailRegex.test(this.state.email);
    if (!isemailOk) {
      alert("invalid email");
      return
    }

    const newBlog = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      id: uuid.v4()
    };

    this.addNew(newBlog);

    this.setState({
      name: "",
      password: "",
      email: ""
    });



    // this.props.history.push("/");
    alert("Successfully Created");
    window.location.href = '/';
  }

  addNew(user) {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(user);
    // Saving
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>New to Blog Stop? </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
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
              disabled={
                !this.state.name || !this.state.email || !this.state.password
              }
              className="btn btn-primary"
            />
          </div>

          <div>
            Already a user ? <Link to={"/login"}>Login</Link>
          </div>
        </form>
      </div>
    );
  }
}
