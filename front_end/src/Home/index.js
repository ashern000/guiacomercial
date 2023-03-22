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
  SearchBox,
  Footer
} from "./styles";
// import Footer from './components/Footer';
import { FiBarChart, FiBook, FiCpu, FiGlobe, FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
    <Header/>
      <NavStyled>

        <ListStyled>


          <ItemStyled>
            <Link to="/categorias"> <p>Todas as categorias</p></Link>
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
        
        <SearchBox>
        <h2>Encontre comércios e pontos turistícos!</h2>

        <SearchStyled>

          <form>
            <input
              type="text"
              placeholder="Pesquise aqui..."
            />
            <FiGlobe />

            <ButtonStyled type="submit">
              <FiSearch size={20} />
            </ButtonStyled>
          </form>

        </SearchStyled>
        </SearchBox>

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

        <Link to="/Categorias"><h3>Ver categorias</h3></Link>

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
