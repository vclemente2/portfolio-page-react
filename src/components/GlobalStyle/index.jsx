import { createGlobalStyle } from "styled-components";
import { backgroundDefault, darkText, font } from "../UI/variables";

const GlobalStyle = createGlobalStyle`
:root{
    font-size: 16px;
    line-height: 1.2
}

*   {
    box-sizing: border-box;
    color: inherit;
    font-family: ${font};
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
}
 
body {
    background: ${backgroundDefault};
    color: ${darkText};
    margin:auto;
    max-width: 1920px;
} 

@media screen and (min-width: 1440px){
:root{
        font-size:24px;
    }
}
`;

export default GlobalStyle;
