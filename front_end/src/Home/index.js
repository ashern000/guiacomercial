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
  SearchBox
} from "./styles";
import {
  FiBook,
  FiCpu,
  FiHeart,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {useState} from "react"
import axios from "axios";

export default function Home() {

  const [search, setSearch] = useState();


  function handleSubmitForm(event){
    event.preventDefault()
    axios.get('http://localhost:4040/empresas')
  
  }

  function handleChange(event){
    setSearch(event.target.value)
  }

  return (
    <>
      <Header />
      <NavStyled>
        <ListStyled>
          <ItemStyled>
            <Link to="/categorias">
              {" "}
              <p>Todas as categorias</p>
            </Link>
          </ItemStyled>

          <ItemStyled>
            <Link to="/subcategorias">
              <p>Comércios</p>
            </Link>
          </ItemStyled>

          <ItemStyled>
            <Link to="/subcategorias">
              <p>Comércios</p>
            </Link>
          </ItemStyled>

          <ItemStyled>
            <Link to="/sobre">
              <p>Sobre Nós</p>
            </Link>
          </ItemStyled>
        </ListStyled>
      </NavStyled>

      <SectionSearch>
        <SearchBox>
          <h2>Encontre comércios e pontos turistícos!</h2>

          <SearchStyled>

            <form onClick={handleSubmitForm}>
              <input type="text" placeholder="Pesquise aqui..." onChange={handleChange}/>
              <ButtonStyled type="submit">
                <FiSearch size={20} />
              </ButtonStyled>
            </form>

          </SearchStyled>
        </SearchBox>
      </SectionSearch>
      {/*  */}
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

        <Link to="/Categorias">
          <h3>Ver categorias</h3>
        </Link>

        <LineDiv></LineDiv>
      </SectionCategory>

      <MainTrades>
        <h1>Principais Comércios</h1>

        <SectionBusiness>

          <DivBusiness>
            <Link to="/comercios">
              <BoxBusiness>
                <CircleImg></CircleImg>
              </BoxBusiness>
            </Link>
            <h3>aaaaaa</h3>
            <p>bbbbbb</p>
          </DivBusiness>

          <DivBusiness>
            <Link to="/comercios">
              <BoxBusiness>
                <CircleImg></CircleImg>
              </BoxBusiness>
            </Link>
            <h3>aaaaaa</h3>
            <p>bbbbbb</p>
          </DivBusiness>

          <DivBusiness>
            <Link to="/comercios">
              <BoxBusiness>
                <CircleImg></CircleImg>
              </BoxBusiness>
            </Link>
            <h3>aaaaaa</h3>
            <p>bbbbbb</p>
          </DivBusiness>

        </SectionBusiness>
      </MainTrades>
    </>
  );
}
