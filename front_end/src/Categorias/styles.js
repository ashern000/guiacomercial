import styled from "styled-components";

export const Wrapper = styled.div`
  width: 92.5%;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.2) 0px 50px 100px -80px,
    rgba(0, 129, 201, 1.5) 0px 30px 60px -40px;
  text-align: center;
`;

export const SectionCategories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SectionSearch = styled.div`
  width: 100%;
  height: 22vh;
  display: flex;
  font-size: 1rem;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  h1,
  h2 {
    text-align: center;
    margin-top: 25px;
  }
`;

export const FilterSection = styled.div`
  width: 100%;
  display: flex;
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
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    padding: 5px;
    border: 1px solid black;
    border-radius: 16px;
    border: 1px solid black;
    font-size: 16px;
    font-weight: normal;
  }

`;

export const SearchStyled = styled.div`
  width: 30%;
  height: 2.5rem;
  border: 2px solid rgba(80, 80, 80, 0.75);
  border-radius: 50px;
  display: flex;
  overflow: hidden;
  align-items: center;

  form {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    align-items: center;
    color: #000;
  }

  input {
    background-color: transparent;
    border: 0;
    width: 80%;
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

export const BoxCategories1 = styled.div`
  margin-top: 5vh;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 7.75%;
  align-items: center;
  flex-wrap: wrap;
`;

export const BoxCategories2 = styled.div`
  margin-top: 8vh;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 7.75%;
  align-items: center;
  flex-wrap: wrap;
`;

export const BoxCategories3 = styled.div`
  margin-top: 8vh;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 7.75%;
  align-items: center;
  flex-wrap: wrap;
`;

export const BoxCategories4 = styled.div`
  margin-top: 8vh;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 7.75%;
  align-items: center;
  flex-wrap: wrap;
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

  :hover {
    background: rgba(0, 0, 40, 0.05);
    filter: blur(5);
  }
`;
