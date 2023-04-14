import {
  SearchStyled,
  ButtonStyled,
  SectionSearch,
  FilterSection,
  BoxCategories1,
  BoxCategories2,
  BoxCategories3,
  BoxCategories4,
  ItemCategory,
  SectionCategories,
} from "./styles";
import Header from "../components/Header";
import { BiFilterAlt } from "react-icons/bi";
import { MdRestaurantMenu, MdArrowDropDown } from "react-icons/md";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import Footer from "../components/Footer";

export default function Categorias() {
  return (
    <>
      <SectionCategories>
        <Header />
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
            <p>Classificar por:
              <select name="filter">
                <option value="Mais Procurados" selected>Mais Procurados</option>
                <option value="A-Z">A-Z</option>
                <option value="A-Z">Z-A</option>
              </select> </p>
          </FilterSection>
        </SectionSearch>

        {/* first box to cards */}
        <BoxCategories1>
          <ItemCategory>
            {" "}
            <FiShoppingCart size={100} />
            <p>Mercados</p>
            <p>Registro - SP</p>
          </ItemCategory>

          <ItemCategory>
            <MdRestaurantMenu size={100} /> <p>Restaurantes</p>
            <p>Registro - SP</p>
          </ItemCategory>

          <ItemCategory></ItemCategory>

          <ItemCategory></ItemCategory>
        </BoxCategories1>

        {/* second box to cards */}
        <BoxCategories2>
          <ItemCategory></ItemCategory>

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
        <Footer />
      </SectionCategories>
    </>
  );
}
