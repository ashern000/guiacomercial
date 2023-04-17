import styled from "styled-components";


export const HeaderStyled = styled.header`

width: 100%;
background-color: #0081C9;
border: 1px solid gray;
display: flex;
align-items: center;
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
text-decoration: none;

@media (max-width:767px){
    width: 95%;
}
`

export const LogoStyled = styled.li`
text-transform: uppercase;
align-items: center;
justify-content: center;
color: white;
`

export const ItemStyled = styled.div`
display: flex;
width: 5%;
justify-content: space-around;
text-transform: uppercase;
align-items: center;
color: white;

svg{
    transition: all 0.5s;
    color: white;
    text-decoration: none;
    justify-content: space-around;
    @media (max-width:767px){
    
    }
}

svg:hover{
    transform: scale(1.08);
}

i{
    display:none ;
    @media (max-width:767px){
        display: block;
        margin-left: 2vh;
    }
}
`