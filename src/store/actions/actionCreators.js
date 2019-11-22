import { gameActionTypes } from "./actionTypes";

export function setEmojiLayout(data) {
  return {
    type: gameActionTypes.SET_EMOJI_LAYOUT,
    payload: { data }
  };
}
