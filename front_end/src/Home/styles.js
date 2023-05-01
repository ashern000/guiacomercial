import styled from "styled-components";
import img from "./img/imgSearch.jpg";
import imgPerfil from "./img/spani.png";
import imgBanner from "./img/spani.jpg";


export const NavStyled = styled.nav`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid rgba(170, 170, 170, 0.7);
  background-color: #ececec;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-around;
  list-style: none;
`;

export const ItemStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #0081c9;
  width: 25%;
  transition: 0.35s ease-in;
  &:hover {
    background-color: #d8d8d8;
  }
`;

export const SectionSearch = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  gap: 35px;
  background-image: url(${img});
  background-position: center;
  background-size: contain;
  background-color: #6ef4f7;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #0081c9;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 50px 100px -80px,
    rgba(0, 0, 0, 0.2) 0px 30px 60px -40px;

  @media (max-width: 320px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    height: 50vh;
  }
`;

export const SearchBox = styled.div`
  width: 80vh;
  height: 40vh;
  display: flex;
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
  }
`;

export const SearchStyled = styled.div`
  width: 45%;
  height: 2.5rem;
  border: 1.5px solid black;
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

    @media (max-width: 767px) {
      width: 90%;
    }
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

export const SectionCategory = styled.section`
  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 28px;
  }

  h2 {
    transition: 0.5s;
  }

  h2:hover {
    filter: brightness(0.85);
  }
  a {
    text-decoration: underline;
  }

  @media (max-width: 767px) {
    margin-top: 2vh;
    height: 40vh;
    max-width: 100vw;

    h1 {
      font-size: 22px;
    }
  }
`;

export const LineDiv = styled.div`
  width: 70%;
  height: 2px;
  opacity: 0.8;
  border: 1px dashed #0081c9;
`;

export const BoxCategories = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;


  a {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
  }
`;

export const ItemCategory = styled.div`
  background-color: #fff;
  width: 230px;
  height: 230px;
  border: 2px solid #0081c9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: 0.6s all;
  color: black;
  svg {
    color: #0081c9;
  }

  &:hover {
    background: rgba(0, 0, 40, 0.02);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  @media (max-width: 767px) {
   width: 170px;
   height: 170px;
    svg{
      width: 50%;
    }

    p{
      font-size:14px;
    }
  }
`;

export const MainTrades = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10%;

  h1 {
    font-size: 28px;
  }

  @media (max-width: 767px){
    height: 40vh;
    h1 {
      font-size: 22px;
    }
  }
`;

export const SectionBusiness = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 30vh;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

`;

export const DivBusiness = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 5vh;
  }

  @media (max-width: 767px){
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-around;
    h3 {
    margin-top: -2vh;
  }
    p{
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
  position: relative;
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

  @media (max-width:767px) {
    width: 300px;
  height: 150px;
  }
`;

export const CircleImg = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -50px;
  border-radius: 50%;
  border: 1px solid black;
  background-image: url(${imgPerfil});
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

  @media (max-width:767px) {
    width: 75px;
  height: 75px;
  bottom: -35px;
  }
`;

