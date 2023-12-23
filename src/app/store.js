import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import blogSlice from "./blog/blogSlice";
export const store = configureStore({
    reducer:{
        user:userSlice,
        blog:blogSlice
    }
});