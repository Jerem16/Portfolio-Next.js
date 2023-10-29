import { useSelector } from "react-redux";
import styled from "styled-components";
import StyledComponentsRegistry from "./registry";
import GlobalStyle from "../utils/style/GlobalStyle";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Providers } from "./GlobalRedux/provider";


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

export default function RootLayout({ children }) {
    return (
        <Providers>
            <StyledComponentsRegistry>
                <GlobalStyle />
                <html lang="fr">
                    <head>
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="robots" content="index, follow" />
                        <meta
                            name="J.L-Portfolio-website"
                            content="Web site created using create-react-app"
                        />
                        <meta name="author" content="Jérémy Lemaignent" />
                    </head>
                    <body>{children}</body>
                </html>
            </StyledComponentsRegistry>
        </Providers>
    );
}
