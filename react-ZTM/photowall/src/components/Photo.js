import React, { Component } from "react";
import { Link } from "react-router-dom";

class Photo extends Component {
  render() {
    const { post, index } = this.props;
    return (
      <figure>
        <Link to={`image/${post.id}`}>
          <img className="photo" src={post.url} alt={post.desc} />
        </Link>
        <figcaption>
          <p>{post.desc}</p>
        </figcaption>
        <div className="button-container">
          <button
            onClick={() => {
              this.props.removePost(index);
            }}
            className="remove-button"
          >
            Remove
          </button>
        </div>
      </figure>
    );
  }
}
export default Photo;
