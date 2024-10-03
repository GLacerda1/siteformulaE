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
    --color-padrao6: #F23064;
    --color-padrao5: #BF3B5E;
    --color-padrao4: #8C8C8C;
    --color-padrao3: #404040;
    --color-padrao2: #262626;
    --color-padrao1: #FFFFFF;
}

body{
    background-color: var(--color-padrao3);

}
`;

export default GlobalStyle;
