import React, { Component } from "react";

class Comment extends Component {
  constructor() {
    super();
    this.onAddComment = this.onAddComment.bind(this);
  }

  onAddComment(event) {
    event.preventDefault();
    const comment = event.target.comment.value;
    this.props.addComment(comment, this.props.postid);
    event.target.comment.value = "";
  }

  render() {
    console.log(this.props);
    return (
      <div className="comment">
        {this.props.comments.map((comment, index) => {
          return <p key={index}>{comment}</p>;
        })}

        <form className="comment-form" onSubmit={this.onAddComment}>
          <input type="text" name="comment" />
        </form>
      </div>
    );
  }
}

export default Comment;
