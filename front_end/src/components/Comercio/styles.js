import styled from "styled-components";


export const ComercioDiv = styled.section`

width: 100%;
height: 12vh;
background-color: blue;
border-radius: 10px;
`

export const ImgDiv = styled.div`

width:20%;
background-image:url(${props => props.imageComercio});
background-repeat:no-repeat;
background-size: cover;
height: 100%;
`

export const InfoDiv = styled.div`
width: 80%;
background-color: red;
`