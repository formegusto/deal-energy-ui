import { createAction } from "redux-actions";
import { FINISH_LOADING, START_LOADING } from "./types";

export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);
