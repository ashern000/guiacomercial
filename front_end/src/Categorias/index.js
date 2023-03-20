import {
  SearchStyled,
  ButtonStyled,
  SectionSearch,
  FilterSection,
  BoxCategories1, BoxCategories2, BoxCategories3, BoxCategories4,
  ItemCategory,
} from "./styles";
import Header from "../components/Header";
import { FiSearch } from "react-icons/fi";
import { BiFilterAlt } from "react-icons/bi";
import Footer from "../components/Footer";

export default function Categorias() {
  return (
    <>
    <Header/>
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
          <p>Classificar por: Mais Procurados</p>
        </FilterSection>
      </SectionSearch>

      {/* first box to cards */}
      <BoxCategories1>
        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

      </BoxCategories1>

    {/* second box to cards */}
      <BoxCategories2>
        <ItemCategory> 
        <FiSearch size={20} />
        </ItemCategory>

        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

      </BoxCategories2>

    {/* third box to cards */}
      <BoxCategories3>
        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

      </BoxCategories3>

    {/* fourth box to cards */}
      <BoxCategories4>
        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

        <ItemCategory></ItemCategory>

      </BoxCategories4>
      
      <Footer/>
    </>
  );
}
