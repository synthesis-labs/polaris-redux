import { FACE } from "../actions/types";

import { SEARCH } from "../actions/face.actions";
import { MATCHED } from "../actions/face.actions";

const initialState = {};

export const faceReducer = (state = initialState, event) => {
  if (event.type !== FACE) return state;

  switch (event.action) {
    case SEARCH:
      console.log("FACE | SEARCH");
      console.log(event.data);
      return state;

    case MATCHED:
      console.log("FACE | MATCHED");
      console.log(event.data);
      return { ...state, matchedFace: event.data };

    default:
      return state;
  }
};
