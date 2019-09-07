import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-blog.component";
import EditTodo from "./components/edit-todo.component";
import BlogsList from "./components/blogs-list.component";

import logo from "./bb.svg";
import SignupUser from "./components/signup.component";
import LoginUser from "./components/loginsignup.component";

class App extends Component {
  render() {
    // const loggedIn = JSON.parse(localStorage.getItem("currentUser"));
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="https://codingthesmartway.com"
              target="_blank"
            >
              <img src={logo} width="45" height="45" alt="loopsdigital.com" />
            </a>
            <Link to="/" className="navbar-brand">
              Blog stop!
            </Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Blogs
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Blog
                  </Link>
                </li>
                {/* {loggedIn && ( */}
                {/* <li
                    className="navbar-item"
                    style={{
                      float: "right",
                      position: "absolute",
                      right: "15px"
                    }}
                  >
                    <Link to="/" className="nav-link">
                      Logout
                    </Link>
                  </li> */}
                {/* )} */}
                {/* {!loggedIn && ( */}
                <li
                  className="navbar-item"
                  style={{
                    float: "right",
                    position: "absolute",
                    right: "15px"
                  }}
                >
                  <Link to="/signup" className="nav-link">
                    Signup
                  </Link>
                </li>
                {/* )} */}
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={BlogsList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/signup" component={SignupUser} />
          <Route path="/login" component={LoginUser} />
        </div>
      </Router>
    );
  }
}

export default App;
