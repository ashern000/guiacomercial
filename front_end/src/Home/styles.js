import styled from "styled-components";
import img from "./img/imgSearch.jpg";
import imgPerfil from "./img/spani.png";
import imgBanner from "./img/spani.jpg";
import imgCupom from "./img/cupom.png";
import imgInsta from "./img/instagram.png"
import imgTwitter from "./img/twitter.png"
import imgLinkedin from "./img/linkedin.png"

export const Wrapper = styled.div`
  width: 94.5%;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 50px 100px -80px,
    rgba(0, 129, 201, 1.5) 0px 30px 60px -40px;
  text-align: center;
`;

export const SectionSearch = styled.section`
  display: flex;
  width: 100%;
  height: 80vh;
  font-size: 1rem;
  text-align: center;
  background-image: url(${img});
  background-position: center;
  background-size: contain;
  background-color: #6ef4f7;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(170, 170, 220, 0.3);
  margin-bottom: 2rem;

  @media (max-width: 320px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    height: 50vh;
  }
`;

export const SearchBox = styled.div`
  display: none;
  width: 80vh;
  height: 40vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(91, 192, 248, 0.4);
  box-shadow: 0 8px 32px 5px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 767px) {
    width: 90%;
    height: 60%;
    font-size: 14px;
    display: flex;
  }
`;

export const SearchStyled = styled.div`
  width: 45%;
  height: 2.5rem;
  border: 1px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  align-items: center;
  margin-top: 2vh;

  form {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-evenly;
    overflow: hidden;
    align-items: center;
    color: #000;
  }

  input {
    background-color: transparent;
    border: 0;
    width: 70%;
    color: #000;
  }
  input:focus {
    border: 0;
    outline: none;
  }

  input::placeholder {
    color: #000;
  }

  @media (max-width: 767px) {
    width: 50%;
    height: 4vh;
  }
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  color: #000;
`;

export const MainTrades = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 28px;
  }

  @media (max-width: 767px) {
    height: 40vh;
    h1 {
      font-size: 22px;
    }
  }
`;

export const SectionBusiness = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 40vh;
  width: 100%;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1400px) {
    justify-content: space-evenly;
  }
`;

export const DivBusiness = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-around;
    h3 {
      margin-top: -2vh;
    }
    p {
      display: none;
    }
  }
`;

export const BoxBusiness = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 350px;
  height: 200px;
  border-radius: 15px;
  border: 1px solid black;
  background-image: url(${imgBanner});
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: 0.5s all;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  @media (max-width: 767px) {
    width: 300px;
    height: 150px;
  }
`;

export const CircleImg = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  bottom: -50px;
  border-radius: 50%;
  border: 1px solid black;
  background-image: url(${imgPerfil});
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

  @media (max-width: 767px) {
    width: 75px;
    height: 75px;
    bottom: -35px;
  }
`;

export const DivCoupons = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const GridDiv = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: 250px 250px;
  grid-template-rows: 250px 250px;
  grid-gap: 12px;
  justify-content: center;

  div {
    background-image: url(${imgCupom});
    background-position: center;
    background-size: contain;
    border-radius: 5px;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 360px 360px;
    grid-template-rows: 400px 400px;
  }
`;

export const Aside = styled.aside`
  width: 40%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    image-rendering: auto;
  }
`;

export const DivCouponsTwo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SocialMedia = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

export const RowSM = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SM1 = styled.a`
  width: 120px;
  height: 120px;
  border-radius: 70px;
  background-image: url(${imgInsta});
  background-size: cover;

  &:hover{
    transform: scale(1.05);
    transition: 0.25s ease-in;
  }
`;

export const SM2 = styled.a`
  width: 120px;
  height: 120px;
  border-radius: 70px;
  background-image: url(${imgTwitter});
  background-size: cover;

    &:hover{
    transform: scale(1.05);
    transition: 0.25s ease-in;
  }
`;

export const SM3 = styled.a`
  width: 120px;
  height: 120px;
  border-radius: 70px;
  background-image: url(${imgLinkedin});
  background-size: cover;

    &:hover{
    transform: scale(1.05);
    transition: 0.25s ease-in;
  }
`;

export const LineDiv = styled.div`
  width: 55%;
  height: 1px;
  margin-top: 1vh;
  opacity: 0.4;
  border: 1px dashed #0081c9;
`;
