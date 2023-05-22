import styled from "styled-components";
import img from "./img/8238768.png";

export const Wrapper = styled.div`
  width: 94.5%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 50px 100px -80px,
    rgba(0, 129, 201, 1.5) 0px 30px 60px -40px;
  text-align: center;
`;

export const ImgPerfil = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-top: 2vh;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const InfoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 25vh;
  margin-top: 4vh;
  text-align: center;

  p {
    margin-top: 15px;
    text-decoration: underline;
  }
`;

export const FormStyled = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35vh;
  display: flex;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 40vh;
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
`;

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
  box-shadow: 0 4px 30px rgba(31, 38, 135, 0.2);
  margin-top: 2vh;
  &:hover {
    transition-duration: 200ms;
    transform: scale(1.02);
  }
`;

export const AlterarStyled = styled.div`
display: flex;
width: 22%;
height: 2vh;
justify-content: flex-end;
align-items: flex-end;

p{
  color: #5bc0f8;
  font-size: 14px;
}
`;
