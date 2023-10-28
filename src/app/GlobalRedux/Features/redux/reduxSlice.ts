"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ReduxState {
    value: number;
}

const initialState: ReduxState = {
    value: 0,
};

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = reduxSlice.actions;

export default reduxSlice.reducer;
