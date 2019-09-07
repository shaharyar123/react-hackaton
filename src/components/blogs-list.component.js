import React, { Component } from "react";
import Blog from "./childs/blogs.component";
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
        <h2
          style={{
            margin: "20px 0px",
            textAlign: "center"
          }}
        >
          All that Blog Stop Caught!
        </h2>

        {this.state.blogs.map((blog, i) => (
          <Blog key={i} i={i} blog={blog} history={this.props.history}></Blog>
        ))}
      </div>
    );
  }
}
