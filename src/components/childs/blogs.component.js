import React, { Component } from "react";

class Blog extends Component {
  render() {
    const loggedIn = JSON.parse(localStorage.getItem("currentUser"));

    const { blog, i, history } = this.props;
    return (
      <div
        onClick={() => {
          history.push(`/view/${blog.id}`);
        }}
        key={i}
        className="card"
        style={{
          width: "48%",
          float: "left",
          margin: "10px 3px"
        }}
      >
        <img
          src="https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3>{blog.blog_title}</h3>
          <p
            style={{
              whiteSpace: "nowrap",
              width: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            className="card-text"
          >
            {blog.blog_content}
          </p>
          Published by : <b> {blog.user.name}</b>
          {loggedIn && loggedIn.id == blog.userId && (
            <a
              style={{
                float: "right",
                color: "red"
              }}
            >
              Delete
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default Blog;
