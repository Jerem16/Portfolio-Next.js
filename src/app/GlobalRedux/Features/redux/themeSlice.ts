"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
    currentTheme: string;
}

const initialState: ThemeState = {
    currentTheme: "#fa5b0f",
    // currentTheme: "#3bc4fd",
    // currentTheme: "#FF4500",
    // currentTheme: "rgb(250, 91, 15)",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.currentTheme = action.payload;
        },
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
