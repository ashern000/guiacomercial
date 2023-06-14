/* Este é um componente React que exibe uma lista de empresas favoritas. Importa vários estilos
componentes e ícones de outros arquivos e também importa uma imagem de ícone de coração. O componente renderiza um
cabeçalho, uma seção de filtro com um menu suspenso e uma seção com uma lista de empresas. Cada
business é exibido em um div com uma imagem de círculo e um ícone de coração. Quando o ícone do coração é clicado,
ele muda sua imagem de plano de fundo para a imagem do ícone de coração, indicando que a empresa foi adicionada
aos favoritos. As funções `ChangeHeart1`, `ChangeHeart2` e `ChangeHeart3` são manipuladores de eventos
para os cliques do ícone de coração e eles alteram a imagem de fundo do ícone de coração clicado. */

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
