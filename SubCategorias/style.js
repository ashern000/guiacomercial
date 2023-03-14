import styled from "styled-components";

export const DivBusiness = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const BoxBusiness = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 350px;
  height: 200px;
  position: relative;
  border-radius: 15px;
  border: 1px solid black;
`;

export const CircleImg = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -50px;
  border-radius: 50%;
  border: 1px solid black;
`;


export const SectionBusiness = styled.section`
width: 70%;
background-color: red;
`

export const PageAtual = styled.p`
  margin-bottom: 10px;
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
  background-color: blue;
  text-align: center;
`

export const SectionCategory = styled.section`
width: 80%;
margin-top:15vh ;
display: flex;
justify-content: space-evenly;
margin-left:30vh;
`

export const SideBar = styled.div`
margin-top:15vh;
 border: 1px solid black;
  padding: 20px;
  flex-basis: 25%;
  left:15vh;
  position: absolute;
  width: 15%;
  height: 60%;
  
  ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  }

  li{
  margin-bottom: 10px;
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;
  }


  li:hover{
  background-color: black;
  color: #fff;
  }
`
