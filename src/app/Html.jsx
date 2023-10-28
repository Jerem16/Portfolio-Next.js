// import "./globals.css";
import "../assets/styles/main.scss";
import { Clicker_Script, Poppins } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useSelector } from "react-redux";

config.autoAddCss = false;

import { Providers } from "./GlobalRedux/provider";

export const Clicker = Clicker_Script({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-clicker ",
});

export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

export const metadata = {
    title: "Portfolio - Web Dev J.L",
    description:
        "Découvrez mon portfolio de développement web front-end. Développeur passionné, je crée des expériences web exceptionnelles avec HTML, CSS, JavaScript et React JS. Explorez mes projets, voyez comment je transforme les idées en sites web interactifs et réactifs. Contactez-moi pour discuter de votre prochain projet web.",

    icons: {
        icon: "img/favicon/icon-argentBank.svg",
        shortcut: "img/favicon/icon-argentBank.svg",
        apple: [
            { url: "img/favicon/icon-argentBank.svg" },
            {
                url: "img/favicon/icon-argentBank.svg",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },
};

export default function Html({ children }) {
    return (
        <html lang="fr" className="scroll-smooth">
            <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                <meta name="robots" content="index, follow" />

                <meta
                    name="J.L-Portfolio-website"
                    content="Web site created using create-react-app"
                />
                <meta name="author" content="Jérémy Lemaignent" />
                <link
                    rel="icon"
                    href={metadata.icons.icon}
                    sizes="32x32"
                    type="image/x-icon"
                />
                <link rel="apple-touch-icon" href={metadata.icons.shortcut} />
            </head>
            <body>{children}</body>
        </html>
    );
}
