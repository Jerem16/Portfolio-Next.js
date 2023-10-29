"use client";

import "../assets/styles/main.scss";
import { RootState } from "./GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
} from "./GlobalRedux/Features/redux/reduxSlice";

import LanguageSelector from "../components/header/LanguageSelector.jsx";
import Header from "../components/header/Header";

export default function Home() {
    const count = useSelector((state) => state.redux.value);

    const dispatch = useDispatch();

    return (
        <main>
            
            <Header />
            {/* <button onClick={() => dispatch(increment())}>Increment</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(2))}>
                Increment by 2
            </button> */}
        </main>
    );
}
