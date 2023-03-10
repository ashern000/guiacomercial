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
  bottom: -10px;
  border-radius: 50%;
  border: 1px solid black;
`;


export const SectionBusiness = styled.section`
width: 70%;
background-color: red;
`


export const SectionCategory = styled.section`
width: 100%;
display: flex;
justify-content: space-around;
`

export const Wrapper = styled.div`
width: 100%;
padding: 10px;
display: flex;
flex-direction: column;
`