import {
  FilterSection,
  SectionBusiness,
  DivBusiness,
  BoxBusiness,
  CircleImg,
  HeartIcon,
  Wrapper
} from "./styles";
import { BiFilterAlt } from "react-icons/bi";
import Header from "../components/Header";
import icon from "./img/heart.png";

export default function Favoritos() {
  return (
    <>
      <Header />
      <Wrapper>
      <FilterSection>
        <h1>Favoritos</h1>
        <p>
          <BiFilterAlt size={20} />
          Classificar por:
          <select name="filter">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="Mais Procurados" selected>
              Mais Procurados
            </option>
          </select>{" "}
        </p>
      </FilterSection>
      <SectionBusiness>
        <DivBusiness>
          <BoxBusiness>
            <CircleImg></CircleImg>
          </BoxBusiness>
          <h3>aaaaaa</h3>
          <HeartIcon id="Heart1" onClick={ChangeHeart1} />
        </DivBusiness>

        <DivBusiness>
          <BoxBusiness>
            <CircleImg></CircleImg>
          </BoxBusiness>
          <h3>aaaaaa</h3>
          <HeartIcon id="Heart2" onClick={ChangeHeart2} />
        </DivBusiness>

        <DivBusiness>
          <BoxBusiness>
            <CircleImg></CircleImg>
          </BoxBusiness>
          <h3>aaaaaa</h3>
          <HeartIcon id="Heart3" onClick={ChangeHeart3} />
        </DivBusiness>
      </SectionBusiness>
      </Wrapper>
    </>
  );
}

function ChangeHeart1() {
  if (document.getElementById("Heart1").style.backgroundImage === "none") {
    document.getElementById("Heart1").style.backgroundImage = `url(${icon})`;
  }
}

function ChangeHeart2() {
  if (document.getElementById("Heart2").style.backgroundImage === "none") {
    document.getElementById("Heart2").style.backgroundImage = `url(${icon})`;
  }
}

function ChangeHeart3() {
  if (document.getElementById("Heart3").style.backgroundImage === "none") {
    document.getElementById("Heart3").style.backgroundImage = `url(${icon})`;
  }
}
