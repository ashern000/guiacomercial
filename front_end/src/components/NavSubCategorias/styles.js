import styled from "styled-components";

export const NavBar = styled.div`
width: 100%;
height: 10vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const OpDiv = styled.ul`
    width: 40%;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.53);
    height: 4vh;
    border-radius: 50px;
    display: flex;
    align-items: center;
    list-style: none;

    &:hover{
        border-color: rgba(0, 0, 0, 1);
    }
`;

export const Option = styled.li`
    width: 40vh;
    height: 2vh;
    border-right: 1px solid;
    border-color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    P{
    cursor: pointer;
}

    &:last-child{
        border: none;
    }

    &:first-child{
        p{
        display: flex;
        justify-content: center;
     align-items: center;
        width: 10vh;
        border: 2px solid;
        border-color: #4ac0ff;
        border-radius: 50px;
        height: 3vh;
        background-color: #a7ddfa;
        font-weight: bold;
    }
    }


`;

export const Select = styled.select`
background-color: transparent;
border: none;
width: 15%;
display: flex;
`;