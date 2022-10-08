import { number } from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class AddPhoto extends Component {
  constructor() {
    super();
    this.addPost = this.addPost.bind(this);
  }

  addPost(event) {
    event.preventDefault();
    const link = event.target.Link.value;
    const desc = event.target.Disc.value;

    if (link !== "" && desc !== "") {
      const post = {
        id: Number(new Date()),
        url: link,
        desc: desc,
      };

      console.log(this.props);

      this.props.addPost(post);
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <div className="form">
          <form onSubmit={this.addPost}>
            <input type="text" placeholder="Link" name="Link" />
            <input type="text" placeholder="Description" name="Disc" />
            <button> Post </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
