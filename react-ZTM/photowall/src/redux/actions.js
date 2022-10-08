//On Remove post

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index: index,
  };
}

//on Add photo

export function addPost(post) {
  return {
    type: "ADDED_POST",
    post: post,
  };
}

//add commnent

export function addComment(comment, id) {
  return {
    type: "ADD_COMMENT",
    comment,
    id,
  };
}
