import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-blog.component";
import EditTodo from "./components/edit-todo.component";
import CreateBlog from "./components/todos-list.component";

import logo from "./bb.svg";

class App extends Component {
  render() {
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
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={CreateBlog} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
