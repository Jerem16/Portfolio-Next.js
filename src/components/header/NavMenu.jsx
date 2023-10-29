import React from "react";
import Link from "next/link";
import { nanoid } from "nanoid";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavMenu({ navLinks, handleClick, language, id }) {
    library.add(fas);
    return (
        <ul className="nav" id={id}>
            {navLinks.map((link) => (
                <li onClick={handleClick} className="head-btn" key={nanoid()}>
                    <FontAwesomeIcon
                        icon={link.icon}
                        className={`icon  ${
                            location.pathname === link.to ? "active-link " : ""
                        }`}
                    />
                    <Link
                        href={link.to}
                        className={
                            location.pathname === link.to ? "active-link" : ""
                        }
                    >
                        {link.text}
                    </Link>
                </li>
            ))}
            <LanguageSelector text={language} />
        </ul>
    );
}

export default NavMenu;
