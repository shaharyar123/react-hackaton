import React, { Component } from "react";
import uuid from "uuid";

export default class ViewBlog extends Component {
  constructor(props) {
    super(props);

    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    let found = blogs.find(element => {
      return element.id == this.props.match.params.id;
    });
    this.state = {
      blog: found
    };
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h2
          style={{
            margin: "30px 0px",
            textAlign: "center"
          }}
        >
          {this.state.blog.blog_title}
        </h2>
        <img
          src="https://static.pexels.com/photos/296886/pexels-photo-296886.jpeg"
          className="card-img-top"
          alt="..."
        />
        <p
          style={{
            margin: "20px 0px",
            fontSize: "22px"
          }}
        >
          {this.state.blog.blog_content}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    );
  }
}
