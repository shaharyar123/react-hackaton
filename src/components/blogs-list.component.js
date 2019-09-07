import React, { Component } from "react";

{
  /* <Link to={"/edit/" + props.todo._id}>Edit</Link> */
}
export default class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
  }

  componentDidMount() {
    // const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    this.setState({
      blogs: blogs
        .map(blog => {
          blog.user = users.find(user => user.id === blog.userId);
          return blog;
        })
        .filter(blog => blog.user)
    });
    console.log("blogs", blogs);
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <h2>Blogs</h2>

        {this.state.blogs.map((blog, i) => (
          <div
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
            </div>
          </div>
        ))}
      </div>
    );
  }
}
