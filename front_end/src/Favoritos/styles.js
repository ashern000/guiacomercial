import styled from "styled-components";
import img from "./img/heartblue.png";
import banner from "./img/banner.jpg";
import imgperfil from "./img/imgperfil.png";

export const FilterSection = styled.div`

h1{
    margin-top: 5vh;
    text-align: center;
}

`

export const FilterStyled = styled.div`
margin-top: 2vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

p{
  margin-left: 2px;
  font-size: 15px;
}

`

export const SectionBusiness = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-top: 5vh;
`;

export const DivBusiness = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3{
    margin-top: 7vh;
  }
`;

export const HeartIcon = styled.div`
width: 20px;
height: 20px;
display:inline-block; 
background-repeat: no-repeat;
background-size: cover;
background-image: url(${img});

`


export const BoxBusiness = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 350px;
  height: 200px;
  position: relative;
  border-radius: 15px;
  border: 1px solid black;
  background-image: url(${banner});
  background-size: cover;
`;

export const CircleImg = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -50px;
  border-radius: 50%;
  border: 1px solid black;
  background-image: url(${imgperfil});
  background-size: cover;
`;