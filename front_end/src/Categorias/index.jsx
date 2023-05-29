import {
  SearchStyled,
  ButtonStyled,
  SectionSearch,
  FilterSection,
  SectionCategories,
  Wrapper,
} from "./styles";
import Header from "../components/Header";
import { BiFilterAlt } from "react-icons/bi";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import Footer from "../components/Footer";
import SectionCategoryItems from "../components/SectionCategory";

export default function Categorias() {
  return (
    <>
      <Header />
      <Wrapper>
        <SectionCategories>
          <SectionSearch>
            <h1>Todas as Categorias</h1>
            <SearchStyled>
              <form>
                <input type="text" placeholder="Pesquise por Categorias" />
                <ButtonStyled type="submit">
                  <FiSearch size={20} />
                </ButtonStyled>
              </form>
            </SearchStyled>
            <FilterSection>
              <BiFilterAlt size={20} />
              <p>
                Classificar por:
                <select name="filter">
                  <option value="Mais Procurados" selected>
                    Mais Procurados
                  </option>
                  <option value="A-Z">A-Z</option>
                  <option value="A-Z">Z-A</option>
                </select>{" "}
              </p>
            </FilterSection>
          </SectionSearch>

          {/* first box to cards */}
          <SectionCategoryItems heightSection="32vh" lineDiv="none" />
          <SectionCategoryItems heightSection="32vh" lineDiv="none" />
          <SectionCategoryItems heightSection="32vh" lineDiv="none" />
          <SectionCategoryItems heightSection="32vh" lineDiv="none" />
        </SectionCategories>
      </Wrapper>
      <Footer />
    </>
  );
}
