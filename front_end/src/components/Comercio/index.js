import { ComercioDiv, ImgDiv, InfoDiv, Comercios } from "./styles.js";

export default function Comercio(props) {
  return (
    <>
    <Comercios>
      <ComercioDiv>
        <ImgDiv imageComercio={props.imageComercio}></ImgDiv>
        <InfoDiv></InfoDiv>
      </ComercioDiv>

      <ComercioDiv>
        <ImgDiv imageComercio={props.imageComercio}></ImgDiv>
        <InfoDiv></InfoDiv>
      </ComercioDiv>

      </Comercios>
    </>
  );
}
