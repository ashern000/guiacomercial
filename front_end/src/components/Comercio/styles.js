import styled from "styled-components";

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
  width: 85%;
  height: 15vh;
  background-color: blue;
`;

export const ImgDiv = styled.div`
  width: 20%;
  background-image: url(${(props) => props.imageComercio});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`;

export const InfoDiv = styled.div`
  width: 80%;
  background-color: red;
`;
