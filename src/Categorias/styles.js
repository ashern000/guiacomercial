import styled from "styled-components";

export const SectionSearch = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  font-size: 1rem;
  text-align: center;
  gap: 35px;
  flex-direction: column;
  align-items: center;

`


export const SearchStyled = styled.div`
 width: 15%;
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
`


export const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  color: #000;
`;