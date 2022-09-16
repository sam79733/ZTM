import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Photowall extends Component {
  render() {
    return (
      <div>
        <Link to="/addPhoto" className="add-button"></Link>
        <div className="photo-grid">
          {this.props.posts
            .sort(function (a, b) {
              return b.id - a.id;
            })
            .map((post, index) => (
              <Photo key={index} post={post} index={index} {...this.props} />
            ))}
        </div>
      </div>
    );
  }
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Photowall;
