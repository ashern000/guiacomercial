import styled from "styled-components";
import imgperfil from "./imgperfil/spani.png"
import imgbanner from "./imgbanner/spani.jpg"

export const DivBusiness = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  color: black;

  h3{
    margin-top: 9vh;
  } 
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
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${imgbanner});
`;

export const CircleImg = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: -50px;
  border-radius: 50%;
  border: 1px solid black;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${imgperfil});
`;


export const SectionBusiness = styled.section`
width: 70%;
`

export const PageAtual = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  display: block;
  padding: 10px;
  color: black;
  text-decoration: none;
  background-color: rgba(0, 100, 240, 0.4);
  text-align: center;
  font-weight: bold;

  svg{
    position: absolute;
    left: 65px;
  }
`

export const SectionCategory = styled.section`
width: 75%;
display: flex;
justify-content: space-evenly;
height: 100vh;
flex-direction: column;
position: relative;
top: -110px;

h1{
  text-align: center;
}
`

export const FilterSection = styled.div`
display: flex;
align-items: center;
margin-left: 10vh;

p{
  padding: 4px;
}
`

export const TesteDiv = styled.div`

display: flex;
justify-content: space-around;
flex-direction: row;
`

export const Container = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 100vh;
position: relative;
top: 110px;
`


export const SideBar = styled.div`
 border: 1px  solid black;
  padding: 20px;


  width: 17.5%;
  font-weight: 530;

  ul{
  list-style-type: none;
  margin: 0;
  padding: 0;

  li{
    margin-top: 2px;
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;
  }
  }


  li:hover{
  background-color: #B1DFFF;
  }
`
