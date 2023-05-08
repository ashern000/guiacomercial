import { Wrapper } from "./style";
import { BiFilterAlt, BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Comercio from "../components/Comercio";
import imgBanner from "./imgbanner/spani.jpg";
export default function SubCategorias() {
  return (
    <>
      <Header />
      <Wrapper>
        <Comercio imageComercio={imgBanner} />
      </Wrapper>
    </>
  );
}
