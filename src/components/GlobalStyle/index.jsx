import { createGlobalStyle } from "styled-components";
import { backgroundColor, secondaryColor } from "../UI/variables";

const GlobalStyle = createGlobalStyle`
*   {
    background: ${backgroundColor};
    box-sizing: border-box;
    color: ${secondaryColor};
    font-family: "Montserrat", sans-serif;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
 
body {
    margin:auto;
    max-width: 1440px;
} 
`;

export default GlobalStyle;
