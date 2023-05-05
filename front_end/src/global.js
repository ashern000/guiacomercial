import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
}

html{
    scroll-behavior: smooth;
}

h1,h2,h3,h4,h5,h6{
    padding: 0;
    margin: 0;
}

body{
    background-color: #dedede;
}

a{
    text-decoration: none;
    color: #0081C9;
}

`;
