import styled from "styled-components";
import logo from "./img/logo.png";

export const Wrapper = styled.div`
width: 94.5%;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 50px 100px -80px,
    rgba(0, 129, 201, 1.5) 0px 30px 60px -40px;
  text-align: center;
  `

export const FormCadEmpresa = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

export const LogoSite = styled.div`
background-image: url(${logo});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
width: 100%;
height: 10vh;
`

export const FormStyled = styled.div`
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 100%;
height: 90vh;
display: flex;
align-items: center;

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
    transition: 0.35s ease-in;
  }
  input:focus {
    border: 0;
    border-bottom: 1px solid #5bc0f8;
    outline: none;
  }

  input::placeholder {
    color: #000;
  }

  #horarioInicial, #horarioFinal{
      width: 30%;
      text-align: center;
  }
`

export const InputFile = styled.div`
`

export const InputHora = styled.div`
display: flex;
margin-top:2vh ;
align-items: center;
width: 80%;
justify-content: space-around;
`

export const ButtonStyled = styled.button`
  border-radius: 50px;
  border: none;
  width: 20vh;
  height: 35px;
  background-color: #0081c9;
  background-image: linear-gradient(160deg, #0081c9 0%, #5bc0f8 100%);
  border: 1px solid #0081c9;
  color: #fff;
  cursor: pointer;
  margin-top: 3vh;
  box-shadow: 0 4px 30px rgba(31, 38, 135, 0.2);

  &:hover{
    transition-duration:200ms;
    transform: scale(1.02);
  }
`;