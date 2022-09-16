import React, { Component } from "react";
import List from "./List";
import Header from "./Header";
import Photowall from "./PhotoWall";
import AddPhoto from "./AddPhotos";
import { Route } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.removePost = this.removePost.bind(this);
  }

  removePost(postRemoved) {
    console.log(postRemoved.desc);

    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  addPhoto(post) {
    if (post != null) {
      this.setState((state) => ({
        posts: state.posts.concat([post]),
      }));
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Route
          exact
          path="/"
          render={(params) => (
            <div>
              <Header title={"Photowalls"} />
              <Photowall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/addPhoto"
          render={(params) => <AddPhoto {...this.props} {...params} />}
        />
      </div>
    );
  }
}

export default Main;
