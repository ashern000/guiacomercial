import styled from "styled-components";
import img from "./img/imgSearch.jpg";

export const NavStyled = styled.nav`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid rgba(170, 170, 170, 0.7);
  background-color: #ececec;
  display: flex;
  justify-content: center;
`;

export const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-around;
  list-style: none;

`;

export const ItemStyled = styled.div`
  color: #0081c9;
`;


export const SectionSearch = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  gap: 35px;
  background-image: url(${img});
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
`;

export const SearchStyled = styled.div`
  width: 35%;
  height: 2.5rem;
  border: 2px solid rgba(80, 80, 80, 0.75);
  border-radius: 50px;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  align-items: center;

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
`;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  color: #000;
`;

export const SectionCategory = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  a {
    text-decoration: underline;
  }
`;

export const LineDiv = styled.div`
  width: 50%;
  height: 2px;
  opacity: 0.8;
  border: 1px dashed #0081c9;
`;

export const BoxCategories = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  gap: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  svg {
    color: #0081c9;
  }

   &:hover {
    transform: scale(1.03);
    
  }
`;

export const MainTrades = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const SectionBusiness = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

export const DivBusiness = styled.div`
  text-align: center;
`;

export const BoxBusiness = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 350px;
  height: 200px;
  border-radius: 15px;
  border: 1px solid black;
`;

export const CircleImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid black;
`;

