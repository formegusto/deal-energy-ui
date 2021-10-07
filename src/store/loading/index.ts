import { handleActions } from "redux-actions";
import { FINISH_LOADING, START_LOADING } from "./types";

type LoadingStore = {
  loading: boolean;
};

const loadingStore: LoadingStore = {
  loading: false,
};

const LoadingReducer = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      loading: false,
    }),
  },
  loadingStore
);
export default LoadingReducer;
