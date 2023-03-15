import styled from "styled-components";
import imgBanner from "./img/spani.jpg"
import imgPerfil from   "./img/spani.png"

export const ComercioHeader = styled.div`

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
height: 14vh;
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
width: 100%;
justify-content: center;
align-items: center;
margin-top: 3vh;
`

export const DescriptionComercio = styled.div`
display: flex;
font-size: 18px;
align-items: center;
width: 50%;
height: 20vh;
text-align: center;
`