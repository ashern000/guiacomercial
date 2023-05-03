import styled from "styled-components";
import img from "./img/guiacomercio.png";
import logo from "./img/logo.png";

export const LogoSite = styled.div`
background-image: url(${logo});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
width: 30%;
height: 10vh;
@media (max-width:767px){
  width: 70%;
}
`

export const BackHome = styled.div`
width: 55%;
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

@media (max-width: 1023px) {
  width: 10%;
}
`
export const TextLogin = styled.p`
display: none;

@media (max-width: 1023px){
  display: block;
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
width: 25%;
height: 100%;
background-color: #0081c9;
background-image: linear-gradient(160deg, #0081c9 0%, #86e5ff 100%);
p{
  font-size: 16px;
  color: black;
  font-weight: bold;
  text-decoration: underline;
}

@media (max-width:1023px){
  display: none;
}
`
export const ImgComercio = styled.div`
width: 60vh;
height: 60vh;
background-size: cover;
background-repeat: no-repeat;
background-image: url(${img});
background-position: center;
`

export const AreaLogin = styled.div`
display: flex;
height: 100vh;
width: 75%;
flex-direction: column;
align-items: center;
justify-content: center;

p{
  text-align: center;
  margin-top: 1vh;
  color: black;
  font-weight: bold;
  font-size: 12px;
  text-decoration: underline;
}

h1 , h2 , h3{
    text-align: center;
    @media (max-width:767px){
      font-size:22px;
    }
 }  
  

  form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width:50vh;
    align-items: center;
    color: #000;
    @media (max-width:767px){
      width: 100%;
    }
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

  @media (max-width: 1023px) {
    width: 100%;
  }
`

export const FormLogin = styled.div`
display: flex;
height: 60vh;
flex-direction: column;
justify-content: center;
align-items: center;
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
  margin-top: 4vh;
  box-shadow: 0 4px 30px rgba(31, 38, 135, 0.2);

  &:hover{
    transition-duration:200ms;
    transform: scale(1.02);
  }

  @media (max-width: 767px){
    width: 15vh;
    font-size: 12px;
  }
`;