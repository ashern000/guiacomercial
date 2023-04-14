import styled from "styled-components";
import imgperfil from "./imgperfil/spani.png";
import imgbanner from "./imgbanner/spani.jpg";

export const DivBusiness = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  color: black;
  h3 {
    margin-top: 6vh;
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
  background-image: url(${imgbanner});
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: 0.5s all;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;

export const CircleImg = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -50px;
  border-radius: 50%;
  border: 1px solid black;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${imgperfil});
`;

export const PageAtual = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: black;
  background-color: rgba(0, 100, 240, 0.4);
  font-weight: bold;

`;

export const SectionCategory = styled.section`
  width: 65%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  h3 {
    text-align: center;
  }
`;

export const FilterSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: bold;
    margin-top: 1vh;
    margin-left: 2px;
    display: flex;
    align-items: center;
  }

  select {
    margin-left: 4px;
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: #f3f3f3;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 16px;
    font-weight: normal;
  }
`;

export const ComerciosSection = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
`;

export const SideBar = styled.div`
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  width: 20%;
  font-weight: 530;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-top: 2px;
      display: block;
      padding: 10px;
      color: #333;
      text-decoration: none;
      transition: background-color 0.2s;
    }
  }

  li:hover {
    background-color: #b1dfff;
  }
`;
