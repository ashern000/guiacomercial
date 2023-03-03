import styled from "styled-components";

export const NavStyled = styled.nav`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid rgba(170, 170, 170, 0.7);
  display: flex;
  justify-content: center;
`;

export const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: space-around;
`;

export const ItemStyled = styled.li`
  display: flex;
  color: blue;
`;

export const SectionSearch = styled.section`
  width: 100%;
height: 60vh;
  display: flex;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  gap: 35px;
  background-color: rgba(200,200,200, 0.3);
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
height: 86vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;


`

export const LineDiv = styled.div`
  width: 50%;
  height: 2px;
  opacity: 0.15;
  background-color: blue;
  position: absolute;
  bottom: -445px;
`

export const BoxCategories = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
`

export const ItemCategory = styled.div`
background-color: #fff;
width:230px;
height:230px;
border: 1px solid blue;
border-radius: 20px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
text-align: center;
gap: 4px;
box-shadow: 0 0 3px rgb(100,100,255);

svg{
    color: rgb(50,50,250);
}
`

export const MainTrades = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

export const SectionBusiness = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 100px;
`

export const BoxBusiness = styled.div`
width: 400px;
height: 200px;
border-radius: 15px;
background-color: yellow;
border: red;
`
