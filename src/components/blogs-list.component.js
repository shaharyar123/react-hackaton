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
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    this.setState({ blogs });
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
            style={{
              padding: "20px",
              borderRadius: " 5px",
              border: "1px solid gray",
              margin: "20px 0px"
            }}
          >
            <h3>{blog.blog_title}</h3>
            <p
              style={{
                whiteSpace: "nowrap",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {blog.blog_content}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
