import {
  FilterSection,
  SectionBusiness,
  DivBusiness,
  BoxBusiness,
  CircleImg,
  HeartIcon,
} from "./styles";
import { BiFilterAlt } from "react-icons/bi";
import Header from "../components/Header";
import icon from "./img/heart.png";
import { MdArrowDropDown } from "react-icons/md";

export default function Favoritos() {
  return (
    <>
      <Header />
      <FilterSection>
        <h2>Favoritos</h2>
        <p>
        <BiFilterAlt size={20} />
          Classificar por:
          <p2>
            Mais Procurados <MdArrowDropDown size={20} />
          </p2>
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
