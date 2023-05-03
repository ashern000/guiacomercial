import styled from "styled-components";
import img from "./img/heartblue.png";
import banner from "./img/banner.jpg";
import imgperfil from "./img/imgperfil.png";


export const FilterSection = styled.div`
height: 15vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: bold;
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

    @media (max-width:767px){
      font-size: 14px
    }
  }

  @media (max-width: 767px){
    h1{
      font-size: 22px;
    }

    p{
      font-size: 14px
    }
  }
`;

export const SectionBusiness = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 40vh;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

`;

export const DivBusiness = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items:center;

h3{
  margin-top: 5vh;
}

  @media (max-width: 767px){
    display: flex;
    align-items:center;
    flex-direction: column;
    height: 28vh;
    justify-content: space-around;
    
    h3{
      display: none;
    }
    }
`;

export const HeartIcon = styled.div`
width: 20px;
height: 20px;
display:inline-block; 
background-repeat: no-repeat;
background-size: cover;
background-image: url(${img});

@media (max-width:767px){
  width: 15px;
height: 15px;
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
  background-image: url(${banner});
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: 0.5s all;

  &:hover {
    transform: scale(1.03);    
    filter: blur(5);
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
  background-image: url(${imgperfil});
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

  @media (max-width:767px) {
    width: 75px;
  height: 75px;
  bottom: -35px;
  }
`;