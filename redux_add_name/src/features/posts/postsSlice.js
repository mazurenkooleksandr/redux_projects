import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(setPosts(result.data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePostId = createAsyncThunk(
  "posts/deletePostId",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch(deletePost(result.data));
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        console.log("fulfilled");
      })
      .addCase(getPosts.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(getPosts.rejected, (state, action) => {
        console.log("rejected");
      });
  },
});
export default postsSlice.reducer;

export const { setPosts, deletePost } = postsSlice.actions;
