import React, { Component } from "react";

export default class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      blog_title: "",
      blog_content: ""
    };
  }

  onChangeTodoDescription(e) {
    this.setState({
      blog_title: e.target.value
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      blog_content: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newBlog = {
      blog_title: this.state.blog_title,
      blog_content: this.state.blog_content
    };

    this.addNew(newBlog);

    this.setState({
      blog_title: "",
      blog_content: ""
    });
    this.props.history.push("/");
    alert("Successfully Created");
  }

  addNew(newBlog) {
    console.log("newBlog", newBlog);

    var blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    // console.log("# of users: " + users.length);
    // users.forEach(function(user, index) {
    //     console.log("[" + index + "]: " + user.id);
    // });

    // Modifying
    // var user = {
    //     id: Math.floor(Math.random() * 1000000)
    // };
    blogs.push(newBlog);

    // Saving
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Blog</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.blog_title}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Content: </label>
            <textarea
              rows="20"
              type="text"
              className="form-control"
              value={this.state.blog_content}
              onChange={this.onChangeTodoResponsible}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
