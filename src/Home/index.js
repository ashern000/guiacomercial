import {
  NavStyled,
  ListStyled,
  ItemStyled,
  SectionSearch,
  SearchStyled,
  ButtonStyled,
  SectionCategory,
  BoxCategories,
  ItemCategory,
  MainTrades,
  BoxBusiness,
  SectionBusiness,
  LineDiv
} from "./styles";
import { FiBarChart, FiBook, FiCpu, FiGlobe, FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <NavStyled>

        <ListStyled>

          <ItemStyled>
            <p>Todas as categorias</p>
          </ItemStyled>

          <ItemStyled>
            <p>Comércios</p>
          </ItemStyled>

          <ItemStyled>
            <p>Comércios</p>
          </ItemStyled>

          <ItemStyled>
            <p>Comércios</p>
          </ItemStyled>

          <ItemStyled>
            <p>Sobre Nós</p>
          </ItemStyled>

        </ListStyled>

      </NavStyled>

      <SectionSearch>

        <h1>Encontre os principais comércios e pontos turísticos do Brasil!</h1>

        <SearchStyled>

          <form>
            <input
              type="text"
              placeholder="Pesquise por Comércios, Cidades ou Categorias..."
            />
            <FiGlobe />

            <ButtonStyled type="submit">
              <FiSearch size={20} />
            </ButtonStyled>

          </form>

        </SearchStyled>

      </SectionSearch>

      <SectionCategory>

        <h1>Categorias</h1>

        <BoxCategories>

          <ItemCategory>
            <FiShoppingCart size={100} />
            <p>Mercados</p>
            <p>Registro - SP</p>
          </ItemCategory>

          <ItemCategory>
            <FiCpu size={100} />
            <p>Name</p>
            <p>Registro - SP</p>
          </ItemCategory>

          <ItemCategory>
            <FiBook size={100} />
            <p>Name</p>
            <p>Registro - SP</p>
          </ItemCategory>

          <ItemCategory>
            <FiHeart size={100} />
            <p>Name</p>
            <p>Registro - SP</p>
          </ItemCategory>

        </BoxCategories>

        <h1><a href="#">Ver categorias </a></h1>

    <LineDiv></LineDiv>

      </SectionCategory>

      <MainTrades>
        <h1>principais comercios</h1>

        <SectionBusiness>

          <BoxBusiness>
            sad
          </BoxBusiness>

          <BoxBusiness>
            a
          </BoxBusiness>

          <BoxBusiness>
            a
          </BoxBusiness>

        </SectionBusiness>

      </MainTrades>
    </>
  );
}
