import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Retrieve the authentication token from the Redux state
// const authToken = getState().auth.token;
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODUwODk3NjAzMzM2MDI2ZWZhZmRkNiIsInVzZXJfdHlwZV9pZCI6MCwiaWF0IjoxNzAzMzEwMDkxLCJleHAiOjE3MDMzNzg0OTF9.qq4nlGd37JSKth5gXEmim3muN65AgfcP4epSmwS3i0c";

// Set the headers with the authentication token
const config = {
    headers: {
        Authorization: `Bearer ${authToken}`,
    },
};
/// create blog
export const createBlog = createAsyncThunk("createBlog", async (data, { rejectedWithValue }) => {
    try {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/blogs`, data, config).then((res) => {
            return res
        })
    } catch (err) {
        return rejectedWithValue(err.response)
    }
})

//// show blog
export const showBlog = createAsyncThunk("showBlog", async (data, { rejectedWithValue }) => {
    try {

        const result = await axios.get(`${import.meta.env.VITE_BASE_URL}/blogs`, config);
        return result.data

    } catch (err) {
        return rejectedWithValue(err)
    }
})

//// delete blog
export const deleteBlog = createAsyncThunk("deleteBlog", async (id, { rejectedWithValue }) => {
    try {
        const result = await axios.delete(`${import.meta.env.VITE_BASE_URL}/blogs/${id}`, config);
        return result

    } catch (err) {
        return rejectedWithValue(err)
    }
})

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: [],
        loading: false,
        error: null
    },
    extraReducers: {
        ///// create user
        [createBlog.pending]: (state) => {
            state.loading = true;
        },
        [createBlog.fulfilled]: (state, action) => {
            state.loading = false;
            state.blogs.push(action.payload);
        },
        [createBlog.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.message
        },

        ///// show blog data
        [showBlog.pending]: (state) => {
            state.loading = true;
        },
        [showBlog.fulfilled]: (state, action) => {
            state.loading = false;
            state.blogs = action.payload;
        },
        [showBlog.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.message
        },

        ///// delete blog data
        [deleteBlog.pending]: (state) => {
            state.loading = true;
        },
        [deleteBlog.fulfilled]: (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.blogs = state.blogs.filter((ele) => ele._id !== id)
            }
        },
        [deleteBlog.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }

})

export default blogSlice.reducer