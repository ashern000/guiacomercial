import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
}



::-webkit-scrollbar{
    background-color:#FFFFFF99 ;
    width: 10px;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb{
    border-radius: 20px;
    transition: 0.5s;
    background-color: #0081C9CC;
    transition: 0.5s all;
}

::-webkit-scrollbar-thumb:hover{
    background-color: #0081C9;
   
}

::-webkit-scrollbar:hover{
    background-color:#FFFFFFDD;
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
