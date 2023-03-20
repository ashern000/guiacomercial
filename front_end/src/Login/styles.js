import styled from "styled-components";



export const LoginStyled = styled.div`
width: 100%;
height: 85vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 2em;
 h1{
    text-align: center;
 }
`

export const EmailStyled = styled.div`
  width: 20%;
  height: 2.5rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  align-items: center;

  &:hover{
    border-bottom: 1px solid  #808080;
  }
  

  form {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: flex-start;
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
  border-radius: 50px;
  border: 1px solid #0081c9;
  width: 170px;
  height: 35px;
  background-color: #5bc0f8;
  color: #fff;
  cursor: pointer;

  &:hover{
    transition-duration:200ms;
    transform: scale(1.02);
  }
`;


export const SenhaStyled = styled.div`
  width: 20%;
  height: 2.5rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  align-items: center;

  &:hover{
    border-bottom: 1px solid  #808080;
  }
  

  form {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: flex-start;
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

export const EsqueceuStyled = styled.div`
p{
  text-decoration: underline;
  color: black;
}
`

export const CadastrarStyled = styled.div`
text-decoration: underline;
color: #0081C9;
font-weight: bold;
`