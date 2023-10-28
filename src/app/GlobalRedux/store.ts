"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/redux/reduxSlice";
import classesSlice from "./Features/redux/classesSlice";
import languageSlice from "./Features/redux/languageSlice";
import themeSlice from "./Features/redux/themeSlice";

export const store = configureStore({
    reducer: {
        redux: counterReducer,
        classes: classesSlice,
        language: languageSlice,
        theme: themeSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
