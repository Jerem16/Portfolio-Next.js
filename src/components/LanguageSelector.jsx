"use client";

import React, { useState, useRef, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../app/GlobalRedux/Features/redux/languageSlice";

import LanguageIcon from "./99-Svg_Icon/LanguageIcon";

import en from "../assets/img/flag/en.svg";
import fr from "../assets/img/flag/fr.svg";
import de from "../assets/img/flag/de.svg";
import it from "../assets/img/flag/it.svg";
import es from "../assets/img/flag/es.svg";
import Image from "next/image";

const LanguageSelector = ({ text }) => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state) => state.language.language);
    const [activeLanguage, setActiveLanguage] = useState(selectedLanguage);
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    const flagRef = useRef(null);

    const toggleSelector = () => {
        setIsSelectorOpen(!isSelectorOpen);
    };

    const changeLanguage = (language) => {
        dispatch(setLanguage(language));
        setActiveLanguage(language);
        setIsSelectorOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (flagRef.current && !flagRef.current.contains(event.target)) {
                setIsSelectorOpen(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <li
                className={`flag nav-language ${
                    isSelectorOpen ? "open" : "close"
                }`}
                onClick={toggleSelector}
                ref={flagRef}
            >
                <i>
                    <LanguageIcon addClass="lang-icon" />
                </i>
                <p className="lang">{text}</p>
                <span className="language-menu">
                    {isSelectorOpen && (
                        <>
                            <Image
                                onClick={() => changeLanguage("en")}
                                src={en}
                                alt="flag-en"
                                width={32}
                                height={32}
                            />
                            <Image
                                onClick={() => changeLanguage("fr")}
                                src={fr}
                                alt="flag-fr"
                                width={32}
                                height={32}
                            />
                            <Image
                                onClick={() => changeLanguage("de")}
                                src={de}
                                alt="flag-de"
                                width={32}
                                height={32}
                            />
                            <Image
                                onClick={() => changeLanguage("it")}
                                src={it}
                                alt="flag-it"
                                width={32}
                                height={32}
                            />
                            <Image
                                onClick={() => changeLanguage("es")}
                                src={es}
                                alt="flag-es"
                                width={32}
                                height={32}
                            />
                        </>
                    )}
                </span>
            </li>
            {/* <li id="nav-language"></li> */}
        </>
    );
};

export default LanguageSelector;
