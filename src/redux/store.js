import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetch/Get";
import savedReducer from "./saved/NewsSaved";

export const store = configureStore({
  reducer: {
    getAPI: fetchReducer,
    savedNews: savedReducer,
  },
});

export default store;
