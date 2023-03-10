import styled from "styled-components";

export const SectionSearch = styled.div`
  width: 100%;
  height: 25vh;
  display: flex;
  font-size: 1rem;
  gap: 35px;
  flex-direction: column;
  align-items: center;

  h1,h2{
    text-align: center;
    margin-top: 25px;
  }

`

export const FilterSection = styled.div`
width: 50%;
height: 0.2vh;
display: flex;
align-items: center;
justify-content: center;

p{
  margin-left: 2px;
  font-weight: bold;
  font-size: 18px;
}
`

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
`

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  color: #000;
`;

export const BoxCategories1 = styled.div`
  margin-top: 8vh;
  width: 100%;
  height: auto;
  display: flex;
  justify-content:center;
  gap: 7.75%;
  align-items: center;
  flex-wrap: wrap;
`;

export const BoxCategories2 = styled.div`
  margin-top: 8vh;
  width: 100%;
  height: auto;
  display: flex;
  justify-content:center;
  gap: 7.75%;
  align-items: center;
  flex-wrap: wrap;
`;

export const BoxCategories3 = styled.div`
  margin-top: 8vh;
  width: 100%;
  height: auto;
  display: flex;
  justify-content:center;
  gap: 7.75%;
  align-items: center;
  flex-wrap: wrap;
`;

export const BoxCategories4 = styled.div`
  margin-top: 8vh;
  width: 100%;
  height: auto;
  display: flex;
  justify-content:center;
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
  gap: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: 0.5s all;
  svg {
    color: #0081c9;
  }

   &:hover {
    transform: scale(1.03);    
  }

  :hover{
    background: rgba(0,0,40,0.05);
    filter: blur(5);
  }


`;