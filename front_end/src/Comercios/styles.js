import styled from "styled-components";
import imgBanner from "./img/spani.jpg";
import imgPerfil from   "./img/spani.png";
import imgCliente from "./img/cliente.jpg";

export const ComercioPage = styled.div`

`

export const ImgPerfil = styled.div`
width: 200px;
height: 200px;
border: 1px solid black;
border-radius: 100px;
position: relative;
bottom: -100px;
background-image: url(${imgPerfil});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const Banner = styled.div`
width: 100%;
height: 50vh;
background-image: url(${imgBanner});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: flex-end;
`

export const Stars = styled.div`
width: 50%;
height: 13vh;
display: flex;
justify-content: center;
align-items:flex-end;
`

export const ClassificationDiv = styled.div`
display: flex;
justify-content: center;
`

export const AddFav = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
position: relative;
right: 20vh;
font-size: 20px;
padding-top: 5px;

p{
    padding-left: 20px;
}
`

export const InformationDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
margin-top: 3vh;
`

export const DescriptionComercio = styled.div`
display: flex;
font-size: 18px;
align-items: center;
text-align: center;
width: 50%;
height: 15vh;
`

export const DataDiv = styled.div`
height: 40vh;
display: flex;
flex-direction: column;

h2{text-align: center;}

ul{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30vh;
    
}

li{
    display: flex;
    align-items: center;
    list-style: none;
    font-size:18px;
}

p{
    padding-left: 8px;
}
`

export const LineDiv = styled.div`
  width: 50%;
  height: 2px;
  opacity: 0.8;
  border-top: 1px dashed #0081c9;
  padding-top: 5vh;
`;

export const LineTransparent = styled.div`
  width: 50%;
  padding-top: 8vh;
`;


export const AvaliacaoDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 20vh;
`

export const Comentarios = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
padding: 3vh;

input{
    border: 1px solid black;
    width: 50vh;
    height: 10vh;
}

`
export const AreaComent =styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 70vh;
`
export const ImgComentario = styled.div`
width: 40px;
height: 40px;
border-radius: 50px;
border: 1px solid black;
background-image: url(${imgCliente});
background-repeat: no-repeat;
background-size: cover;

`
