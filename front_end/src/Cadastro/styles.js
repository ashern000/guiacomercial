import styled from "styled-components";
import img from "./img/guiacomercio.png"

export const BackHome = styled.div`
width: 65%;
position: fixed;
top: 0;
left: 0;
display: flex;
height: 10vh;
justify-content: space-around;
flex-direction: column;
font-size: 22px;

svg{
  color: black;
}
`

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
background-color: #0081c9;
background-image: linear-gradient(160deg, #0081c9 0%, #86e5ff 100%);
p{

  font-size: 16px;
  color: black;
  font-weight: bold;
  text-decoration: underline;
}
`
export const ImgComercio = styled.div`
width: 60vh;
height: 60vh;
margin-top: 10vh;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${img});
background-position: center;
`

export const AreaLogin = styled.div`
display: flex;
height: 100vh;
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
  background-color: #0081c9;
background-image: linear-gradient(160deg, #0081c9 0%, #5bc0f8 100%);
border: 1px solid #0081c9;
  color: #fff;
  cursor: pointer;
  margin-top: 4vh;
  box-shadow: 0 4px 30px rgba(31, 38, 135, 0.2);

  &:hover{
    transition-duration:200ms;
    transform: scale(1.02);
  }
`;