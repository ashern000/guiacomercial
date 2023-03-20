import styled from "styled-components";
import img from "./img/guiacomercio.png"

export const LoginStyled = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
`
export const AreaCadastro = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 30%;
height: 100%;
background-color: #0081C9;
`
export const ImgComercio = styled.div`
width: 70vh;
height: 70vh;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${img});
background-position: center;
`

export const AreaLogin = styled.div`
display: flex;
height: 40vh;
width: 70%;
flex-direction: column;
align-items: center;
justify-content: center;

p{
  text-align: center;
  margin-top: 2vh;
  color: black;
  font-weight: bold;
  font-size: 12px;
  text-decoration: underline;
}

h1 , h2 , h3{
    text-align: center;
 }  
  

  form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width:40vh;
    align-items: center;
    color: #000;
  }

  input {
    background-color: transparent;
    border: 0;
    width: 100%;
    color: #000;
    border-bottom: 1px solid black;
    margin-top: 5vh;
  }
  input:focus {
    border: 0;
    border-bottom: 1px solid black;
    outline: none;
  }

  input::placeholder {
    color: #000;
  }
`

export const ButtonStyled = styled.button`
  border-radius: 50px;
  border: none;
  width: 30vh;
  height: 35px;
  background-color: #5bc0f8;
  color: #fff;
  cursor: pointer;
  margin-top: 4vh;

  &:hover{
    transition-duration:200ms;
    transform: scale(1.02);
  }
`;