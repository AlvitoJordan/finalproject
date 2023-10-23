import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const saveNews = createAsyncThunk("saved/news", (data) => {
  try {
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const unsaveNews = createAsyncThunk("saved/unsave", (data) => {
  try {
    return data;
  } catch (error) {
    console.log(error);
  }
});

const savedSlice = createSlice({
  name: "savedSlice",
  initialState: {
    newsSaved: [],
  },
  extraReducers: (builder) => {
    builder.addCase(saveNews.fulfilled, (state, action) => {
      state.newsSaved.push(action.payload);
    });

    builder.addCase(unsaveNews.fulfilled, (state, action) => {
      state.newsSaved = state.newsSaved.filter((news) => news.title !== action.payload.title);
    });
  },
});

export default savedSlice.reducer;
