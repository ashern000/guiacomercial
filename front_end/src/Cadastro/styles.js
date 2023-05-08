import styled from "styled-components";
import img from "./img/guiacomercio.png";
import logo from "./img/logo.png";

export const Wrapper = styled.div`
  width: 92.5%;
  border-radius: 14px;
  height: 90vh;
  margin: 0 auto;
  overflow-x: hidden;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 50px 100px -80px,
    rgba(0, 129, 201, 1.5) 0px 30px 60px -40px;
  text-align: center;
`;

export const AlignDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BackHome = styled.div`
  width: 15%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 20vh;
  justify-content: space-around;
  flex-direction: column;
  font-size: 22px;

  svg {
    color: black;
  }

  @media (max-width: 1023px) {
    width: 10%;
  }
`;
export const TextLogin = styled.p`
  display: none;

  @media (max-width: 1023px) {
    display: block;
  }
`;

export const CadastroStyled = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  overflow-y: hidden;
  align-items: center;
`;
export const AreaHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 65%;
  height: 100%;
  background-color: #0081c9;
  p {
    font-size: 16px;
    color: black;
    font-weight: bold;
    text-decoration: underline;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;
export const LogoSite = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 65%;
  height: 10vh;

  @media (max-width: 767px) {
    width: 70%;
  }
`;

export const FormCadastro = styled.form`
  display: flex;
  width: 100%;
  height: 60vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgComercio = styled.div`
  width: 60vh;
  height: 60vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const AreaCadastro = styled.div`
  display: flex;
  height: 90vh;
  width: 35%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    margin-top: 2vh;
    color: black;
    font-weight: bold;
    font-size: 12px;
    text-decoration: underline;
  }

  h1,
  h2,
  h3 {
    text-align: center;

    @media (max-width: 767px) {
      font-size: 22px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 50vh;
    align-items: center;
    color: #000;

    @media (max-width: 767px) {
      width: 60%;
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

    @media (max-width: 767px) {
      font-size: 12px;
    }
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
`;

export const ButtonStyled = styled.button`
  border-radius: 50px;
  border: none;
  width: 20vh;
  height: 35px;
  background-color: #0081c9;
  background-image: linear-gradient(160deg, #0081c9 0%, #5bc0f8 100%);
  color: #fff;
  margin-top: 4vh;
  box-shadow: 0 4px 30px rgba(31, 38, 135, 0.2);

  @media (max-width: 767px) {
    width: 15vh;
    font-size: 12px;
  }

  &:hover {
    transition-duration: 200ms;
    transform: scale(1.02);
  }
`;
