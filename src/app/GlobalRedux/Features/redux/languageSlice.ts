"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface LanguageState {
    language: string;
}

const initialState: LanguageState = {
    language: "fr",
};

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
