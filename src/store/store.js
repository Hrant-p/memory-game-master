import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";
import { Map } from "immutable";
import rootReducer from "./reducers";

const store = createStore(rootReducer, Map(), composeWithDevTools());

export default store;
