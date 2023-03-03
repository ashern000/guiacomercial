import styled from "styled-components";


export const HeaderStyled = styled.header`

width: 100%;
height: 4.25rem;
background-color: rgb(50,50,255);
border: 1px solid gray;

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
margin: 0 10px;
text-transform: uppercase;
align-items: center;
justify-content: center;

svg{
    margin-top:10px;
}

svg:last-child{
    margin-left: 5px;
}
`