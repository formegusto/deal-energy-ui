import { combineReducers } from "redux";
import loading from "./loading";

const rootStore = combineReducers({
  loading,
});

export type RootStore = ReturnType<typeof rootStore>;

export default rootStore;
