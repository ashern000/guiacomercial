import {
  SectionSearch,
  LineDiv,
  MainTrades,
  BoxBusiness,
  SectionBusiness,
  DivBusiness,
  CircleImg,
  DivCoupons,
  GridDiv,
  DivCouponsTwo,
  Aside,
  SocialMedia,
  RowSM,
  SM1,
  SM2,
  SM3,
  Wrapper,
} from "./styles";
import FooterStyled from "../components/Footer";
import { Link } from "react-router-dom";
import img from "./img/cupom.png";
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
        <SectionSearch></SectionSearch>

        {/*  */}
        <h1>Categorias</h1>
        <SectionCategoryItems heightSection="50vh" />

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
          <DivCouponsTwo>
            <Aside>
              <img src={img} />
            </Aside>

            <GridDiv>
              <div></div>

              <div></div>

              <div></div>

              <div></div>
            </GridDiv>
          </DivCouponsTwo>
        </DivCoupons>

        <SocialMedia>
          <h2>Acompanhe as nossas redes sociais!</h2>
          <RowSM>
            <SM1 href="instagram.com"> </SM1>
            <SM2 href="twitter.com"> </SM2>
            <SM3 href="linkedin.com"> </SM3>
          </RowSM>
        </SocialMedia>

       
      </Wrapper> 
      <FooterStyled />
    </>
  );
}
