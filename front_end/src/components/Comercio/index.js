import {ComercioDiv, ImgDiv, InfoDiv } from "./styles.js";

export default function Comercio(props){
    return(
        <>
        
        <ComercioDiv>
            <ImgDiv imageComercio={props.imageComercio}></ImgDiv>
            <InfoDiv>

            </InfoDiv>

        </ComercioDiv>

        </>
    )
}