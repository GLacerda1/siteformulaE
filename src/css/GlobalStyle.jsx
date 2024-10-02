import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
}
html{
    scroll-behavior:smooth;
}


:root {
    --color-padrao6: #11395C;
    --color-padrao5: #1D598F;
    --color-padrao4: #2580CF;
    --color-padrao3: #2E9DFF;
    --color-padrao2: #71BCFF;
    --color-padrao1: #FFFFFF;
}

body{
    background-color: black;
}
`;

export default GlobalStyle;
