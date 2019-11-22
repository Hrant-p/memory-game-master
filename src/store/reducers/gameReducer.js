import { fromJS } from "immutable";
import { gameActionTypes } from "../actions/actionTypes";
import { generateInitialArr, shuffle } from "../../helpers/generateNewData";

const initialArr = shuffle(generateInitialArr());

const initialState = fromJS({
  layout: initialArr
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case gameActionTypes.SET_EMOJI_LAYOUT:
      return state.set("layout", fromJS(payload.data));

    default:
      return state;
  }
};
