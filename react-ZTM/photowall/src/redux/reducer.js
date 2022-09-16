import posts from "../data/post";

const postReducer = function (state = posts, action) {
  console.log(action.index);

  switch (action.type) {
    case "REMOVE_POST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "ADDED_POST":
      return [action.post, ...state];
    default:
      return state;
  }
};

export default postReducer;