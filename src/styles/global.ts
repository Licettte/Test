import {createGlobalStyle} from 'styled-components';
import {fonts} from "./fonts";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        outline: none;
    }

    html {
        font-size: 15px;
    }

    body {
        margin: auto;
        max-width: 1110px;
        height: 100%;
 
    }

    a {
        color: inherit;
        text-decoration: inherit;
        cursor: pointer;
    }

    ul {
        list-style: none;
        margin: 0;
        flex-wrap: wrap;

    }

    li {
        padding: 0
    }

    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-size: inherit;
        font-weight: inherit;
    }

    img {
        vertical-align: top;
    }

    h1 {
        ${fonts.FONT_BOLD_25};
        margin: 0;
    }

    h2 {
        ${fonts.FONT_BOLD_15};
    
    }

    h3 {
        ${fonts.FONT_BOLD_15};
    }

    h4 {
        ${fonts.FONT_SEMI_BOLD_17};
    }

    h5 {
        font-size: 1.75rem;
    }

    h6 {
        ${fonts.FONT_MEDIUM_15};
        margin: 0;
        padding: 0;
    }
`;
