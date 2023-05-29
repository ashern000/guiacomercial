import {
  ComercioDiv,
  ImgDiv,
  InfoDiv,
  Comercios,
  VisitDiv,
  Stars,
  StarIcon,
  DivTopo,
  AddFav,
  ArrowDiv,
} from "./styles.js";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Comercio(props) {
  return (
    <>
      <Comercios>
        <ComercioDiv>
          <ImgDiv imageComercio={props.imageComercio}></ImgDiv>

          <InfoDiv>
            <DivTopo>
              <h3>Nome do Comércio</h3>
              <Stars>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Stars>
            </DivTopo>

            <p>Aberto de 09:00h até 18:00h</p>
          </InfoDiv>

          <VisitDiv>
            <ArrowDiv>
              <BsArrowRightCircle size={30} />
              <p>Visitar comércio</p>
            </ArrowDiv>
          </VisitDiv>
        </ComercioDiv>

        <ComercioDiv>
          <ImgDiv imageComercio={props.imageComercio}></ImgDiv>
          <InfoDiv></InfoDiv>
          <VisitDiv></VisitDiv>
        </ComercioDiv>
      </Comercios>
    </>
  );
}
