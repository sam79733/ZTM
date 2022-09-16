import React, { Component } from "react";

class Photo extends Component {
  render() {
    const { post, index } = this.props;
    return (
      <figure>
        <img className="photo" src={post.url} alt={post.desc} />
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
