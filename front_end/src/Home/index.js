import {
  SectionSearch,
  SearchStyled,
  ButtonStyled,
  LineDiv,
  MainTrades,
  BoxBusiness,
  SectionBusiness,
  DivBusiness,
  CircleImg,
  SearchBox,
  DivCoupons,
  GridDiv,
  AlignDiv,
  DivAside,
  Aside,
  SocialMedia,
  RowSM,
  Wrapper
} from "./styles";
import FooterStyled from "../components/Footer";
import { Link } from "react-router-dom";
import {FiSearch } from "react-icons/fi"
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import SectionCategoryItems from "../components/SectionCategory";

export default function Home() {
  const [search, setSearch] = useState();

  function handleSubmitForm(event) {
    event.preventDefault();
    axios.get("http://localhost:4040/empresas");
    //
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <Header />
    <Wrapper>
   
      <SectionSearch>
        <SearchBox>
          <h2>Encontre comércios e pontos turistícos!</h2>

          <SearchStyled>
            <form onClick={handleSubmitForm}>
              <input
                type="text"
                placeholder="Pesquise aqui..."
                onChange={handleChange}
              />
              <ButtonStyled type="submit">
                <FiSearch size={20} />
              </ButtonStyled>
            </form>
          </SearchStyled>
        </SearchBox>
      </SectionSearch>

      {/*  */}
    <h1>Categorias</h1>
    <SectionCategoryItems heightSection="50vh"/>
  
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
        <LineDiv></LineDiv>
      </MainTrades>

      <DivCoupons>

        <DivAside>
          <Aside>
            <p></p>
          </Aside>
        </DivAside>

        <AlignDiv>

          <GridDiv>

            <div></div>

            <div></div>

            <div></div>

            <div></div>

          </GridDiv>

        </AlignDiv>
      </DivCoupons>


      <SocialMedia>
      <h2>Acompanhe as nossas redes sociais!</h2>
      <RowSM>
        <div></div>
        <div></div>
        <div></div>
      </RowSM>

      </SocialMedia>

      
       <FooterStyled />
       </Wrapper>
    </>

  );
}
