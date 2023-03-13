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
  DivBusiness,
  LineDiv,
  CircleImg,
  Footer
} from "./styles";
// import Footer from './components/Footer';
import { FiBarChart, FiBook, FiCpu, FiGlobe, FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <NavStyled>

        <ListStyled>


          <ItemStyled>
            <a href="#"><p>Todas as categorias</p></a>
          </ItemStyled>

          <ItemStyled>
            <a href="#"><p>Comércios</p></a>
          </ItemStyled>

          <ItemStyled>
            <a href="#"><p>Comércios</p></a>
          </ItemStyled>

          <ItemStyled>
            <a href="#"><p>Comércios</p></a>
          </ItemStyled>

          <ItemStyled>
            <a href="#"><p>Sobre Nós</p></a>
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

          <Link to="/subcategorias">
            <ItemCategory>
              <FiShoppingCart size={100} />
              <p>Mercados</p>
              <p>Registro - SP</p>
            </ItemCategory>
          </Link>

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

        <Link to="/Categorias"><h1>Ver categorias</h1></Link>

        <LineDiv></LineDiv>

      </SectionCategory>

      <MainTrades>
        <h1>Principais Comércios</h1>
        <SectionBusiness>

          <DivBusiness>
            <BoxBusiness>
              <CircleImg>

              </CircleImg>
            </BoxBusiness>
            <h3>aaaaaa</h3>
            <p>bbbbbb</p>
          </DivBusiness>

          <DivBusiness>
            <BoxBusiness>
              <CircleImg>

              </CircleImg>
            </BoxBusiness>
            <h3>aaaaaa</h3>
            <p>bbbbbb</p>
          </DivBusiness>

          <DivBusiness>
            <BoxBusiness>
              <CircleImg>

              </CircleImg>
            </BoxBusiness>
            <h3>aaaaaa</h3>
            <p>bbbbbb</p>
          </DivBusiness>


        </SectionBusiness>

      </MainTrades>

    </>
  );
}
