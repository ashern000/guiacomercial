import { Wrapper } from "./style";
import { BiFilterAlt, BiMap } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Comercio from "../components/Comercio";
import imgBanner from "./imgbanner/spani.jpg";
import { useEffect } from "react";
import { api } from "../services/api.js";

export default function SubCategorias() {
  let location = useLocation();
  useEffect(() => {
    let res = async () => {
      await api.get(`/empresas/${location.state.pesquisa}`);
    };
    res()
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  }, []);
  return (
    <>
      <Header />
      <Wrapper>
        <Comercio imageComercio={imgBanner} />
      </Wrapper>
    </>
  );
}
