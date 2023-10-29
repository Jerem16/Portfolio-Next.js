"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import HeaderDataLoader from "./HeaderDataLoader";
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../app/GlobalRedux/Features/redux/classesSlice";
import NavMenu from "./NavMenu";

import "./header.scss";

function Header() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleClasses("open")); 
    };


    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Vérifiez si window est défini (côté client)
            const mediaQuery = window.matchMedia("(max-width: 992px)");
            const updateIsMobile = (event) => {
                setIsMobile(event.matches);
            };

            mediaQuery.addListener(updateIsMobile);

            return () => {
                mediaQuery.removeListener(updateIsMobile);
            };
        }
    }, []);

    return (
        <HeaderDataLoader>
            {(headerData) => (
                <header>
                    <div className={`aside`}>
                        <div className="aside_bg">
                            <div className="aside_bg_top"></div>
                            <div className="aside_bg_center"></div>
                            <div className="aside_bg_bottom"></div>
                        </div>

                        <div className="logo">
                            <Link href={headerData.navLinks[0].to}>
                                <span>{headerData.logoTitle}</span>
                                {headerData.logoSpanTitle}
                            </Link>
                        </div>

                        {isMobile ? (
                            <NavMenu
                                id="tablet"
                                navLinks={headerData.navLinks}
                                handleClick={handleClick}
                                language={headerData.language}
                            />
                        ) : (
                            <NavMenu
                                id="desktop"
                                navLinks={headerData.navLinks}
                                language={headerData.language}
                            />
                        )}

                        <ThemeSelector />
                    </div>
                </header>
            )}
        </HeaderDataLoader>
    );
}

export default Header;
