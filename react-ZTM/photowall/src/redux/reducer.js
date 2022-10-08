import _posts from "../data/post";
import { combineReducers } from "redux";

function posts(state = _posts, action) {
  console.log("Post Reducer");
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
}

function comments(state = {}, action) {
  console.log("Comment Reducer");
  switch (action.type) {
    case "ADD_COMMENT": {
      if (!state[action.id]) {
        console.log(state);
        return { ...state, [action.id]: [action.comment] };
      } else {
        console.log(state);
        return {
          ...state,
          [action.id]: [...state[action.id], action.comment],
        };
      }
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
