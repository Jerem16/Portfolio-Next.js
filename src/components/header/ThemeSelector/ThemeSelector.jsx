"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../../app/GlobalRedux/Features/redux/themeSlice";
import { faGear, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ThemeSelector() {
    const dispatch = useDispatch();

    const [isSelectorOpen, setIsSelectorOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSelector = () => {
        setIsSelectorOpen(!isSelectorOpen);
    };

    const changeToTheme = (themeColor) => {
        dispatch(changeTheme(themeColor));
    };

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode(!isDarkMode);

        if (isDarkMode) {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }

        const dayNightIcon = document.querySelector(".day-night i");
        if (dayNightIcon) {
            dayNightIcon.classList.remove("fa-sun", "fa-moon");
            dayNightIcon.classList.add(isDarkMode ? "fa-sun" : "fa-moon");
        }
    }, [isDarkMode]);

    useEffect(() => {
        if (!document.body.classList.contains("dark")) {
            toggleDarkMode();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="switcher-container">
            <div className="switcher-block">
                <div
                    className="s-icon style-switcher-toggler"
                    onClick={toggleSelector}
                >
                    <FontAwesomeIcon icon={faGear} spin className="icon" />
                </div>
                <div className="s-icon day-night" onClick={toggleDarkMode}>
                    {isDarkMode ? (
                        <FontAwesomeIcon icon={faSun} className="icon" />
                    ) : (
                        <FontAwesomeIcon icon={faMoon} className="icon" />
                    )}
                </div>
            </div>
            <div className={`style-switcher ${isSelectorOpen ? "open" : ""}`}>
                <h4>Theme Colors</h4>
                <div className="colors">
                    <span
                        className="color-1"
                        onClick={() => changeToTheme("#ec1839")}
                    ></span>
                    <span
                        className="color-2"
                        onClick={() => changeToTheme("#fa5b0f")}
                    ></span>
                    <span
                        className="color-3"
                        onClick={() => changeToTheme("#37b182")}
                    ></span>
                    <span
                        className="color-4"
                        onClick={() => changeToTheme("#1854b4")}
                    ></span>
                    <span
                        className="color-5"
                        onClick={() => changeToTheme("#f021b2")}
                    ></span>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ThemeSelector);
