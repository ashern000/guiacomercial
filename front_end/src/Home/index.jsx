/**
  * Este é um componente React para a página inicial de um site, que inclui seções para pesquisa,
  * exibindo categorias e empresas e links de mídia social.
  * @returns O componente Home está sendo retornado.
  */

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
import { Link, useLocation } from "react-router-dom";
import img from "./img/cupom.png";
import Header from "../components/Header";
import SectionCategoryItems from "../components/SectionCategory";
import { Toaster, toast } from "react-hot-toast";
import { api } from "../services/api";
import { useContext } from "react";
import { usuarioContext } from "../contexts/usuarioContext";

export default function Home() {
  const{token} = useContext(usuarioContext)
  console.log(token);
  let location = useLocation();
  setTimeout(()=>{
    if (location.state.error) {
      toast.error(location.state.error);
    }
  },750)

  return (
    <>
      <Header />
      <Wrapper>
        <SectionSearch></SectionSearch>

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
      <Toaster />
    </>
  );
}
