import { Wrapper, Page } from "./style";
import { BiFilterAlt, BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Comercio from "../components/Comercio";
import imgBanner from "./imgbanner/spani.jpg";
import NavSubCategorias from "../components/NavSubCategorias";
export default function SubCategorias() {
  return (
    <>
      <Header />
      <Wrapper>
      <h1>Mercados em Registro</h1>
        <NavSubCategorias/>
        <Comercio imageComercio={imgBanner} />
      </Wrapper>
    </>
  );
}
