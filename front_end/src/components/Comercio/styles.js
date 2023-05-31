import styled from "styled-components";
import Star from "./img/star.png"
import Heart from "./img/heart.svg"

export const Comercios = styled.section`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  align-items: center;
`;

export const ComercioDiv = styled.section`
  width: 50%;
  height: 15vh;
  display: flex;
  border: 1px solid black;
  border-radius: 12px;
  box-shadow: 0 2px 4px 0 rgba( 0, 0, 0, 0.2 );
`;

export const ImgDiv = styled.div`
  width: 30%;
  background-image: url(${(props) => props.imageComercio});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-right: 1px solid black;
`;

export const InfoDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
width: 40%;
height: 15vh;
border-right: 1px solid black;
`

export const DivTopo = styled.div`

`

export const Stars = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const StarIcon = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Star});
`

export const AddFav = styled.div`
width: 30px;
height: 30px;
background-image: url(${Heart});
background-size: cover;
background-repeat: no-repeat;
`

export const VisitDiv = styled.div`
width: 30% ;
height: 15vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

export const ArrowDiv = styled.div`
width: 50%;
color: #0081c9;
`

