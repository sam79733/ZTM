import React, { Component } from "react";
import Photo from "./Photo";
import Comment from "./Comment";

class Image extends Component {
  render() {
    const id = this.props.match.params.id;
    const single = this.props.posts.find((post) => post.id == id);
    const comments = this.props.comments[id] || [];
    const index = this.props.posts.findIndex((post) => post.id == id);

    console.log(comments, " -id- ", id);

    return (
      <div className="single-image">
        <Photo post={single} />
        <Comment
          postid={id}
          comments={comments}
          addComment={this.props.addComment}
        />
      </div>
    );
  }
}

export default Image;
