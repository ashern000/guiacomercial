import styled from "styled-components";

export const SectionCategory = styled.section`
  width: 100%;
  background-color: ${props => props.backgroundColor ?props.backgroundColor : "#FFFFFF"};
  height: ${props => props.heightSection ?props.heightSection : "40vh"};;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

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

  @media (max-width: 992px) {
    margin-top: 2vh;
    height: 50vh;
    width: 100%;

    h1 {
      font-size: 22px;
    }
  }
`;

export const BoxCategories = styled.div`
  width: 95%;
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
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: 0.6s all;
  color: black;
  svg {
    color: #0081c9;
  }

  &:hover {
    background: rgba(0, 129, 201, 0.01);
    box-shadow: rgba(0, 129, 201, 0.09) 0px 4px 4px,
      rgba(0, 129, 201, 0.23) 0px 6px 6px;
      transform: scale(1.015,1.015);
  }

  @media (max-width: 767px) {
    width: 170px;
    height: 170px;
    svg {
      width: 50%;
    }

    p {
      font-size: 14px;
    }
  }
`;


export const LineDiv = styled.div`
  width: 55%;
  height: 1px;
  margin-top: 1vh;
  display: ${props=> props.lineDiv ? props.lineDiv : "block"};
  opacity: 0.4;
  border: 1px dashed #0081c9;
`;