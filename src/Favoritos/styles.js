import styled from "styled-components";
import img from "./img/heart.png";
import imgactive from "./img/heart-blue.png"

export const FilterSection = styled.div`

h1{
    margin-top: 5vh;
    text-align: center;
}

`

export const FilterStyled = styled.div`
margin-top: 5vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

p{
  margin-left: 2px;
  font-weight: bold;
  font-size: 18px;
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
  flex-direction: column;
`;

export const HeartIcon = styled.div`
width: 20px;
height: 20px;
background-repeat: no-repeat;
background-size: cover;
background-image: url(${img});


&:checked{
  background-image: url(${imgactive}) ;
}
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
`;

export const CircleImg = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -10px;
  border-radius: 50%;
  border: 1px solid black;
`;