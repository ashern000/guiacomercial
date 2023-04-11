import styled from "styled-components";


export const HeaderStyled = styled.header`

width: 100%;
height: 3.75rem;
background-color: #0081C9;
border: 1px solid gray;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 1;
`

export const ListStyled = styled.ul`
list-style: none;
display: flex;
justify-content: space-between;
align-items: center;
color: #FFF;
height: 4.25rem;
font-size: 2rem;
width: 100%;

`

export const ItemStyled = styled.li`
margin: 0 30px;
text-transform: uppercase;
align-items: center;
justify-content: center;
color: white;

svg{
    transition: all 0.5s;
    color: white;
    text-decoration: none;
    margin-left: 2vh;
    @media (max-width:767px){
    margin-right: 2vh;
    }
}

svg:hover{
    transform: scale(1.08);
}

i{
    display:none ;
    @media (max-width:767px){
        display: block;
    }
}
`