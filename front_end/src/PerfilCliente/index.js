import {
  PerfilDiv,
  InfoDiv,
  ImgPerfil,
  BoxBusiness,
  MainTrades,
  DivBusiness,
  SectionBusiness,
  CircleImg,
  CadastreComercio,
  ButtonStyled,
  Wrapper
} from "./styles";
import Header from "../components/Header";
import {FiEdit} from "react-icons/fi"
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Perfil() {
  return (
    <>
      <Header />
      <Wrapper>

      <PerfilDiv>
        <InfoDiv>
          <ImgPerfil><Link to="/editarperfil">
              <FiEdit/>
          </Link></ImgPerfil>
          <h3>Vagner Love</h3>
          
        </InfoDiv>

        <MainTrades>
          <h2>Meus comércios cadastrados</h2>
          <SectionBusiness>
            <DivBusiness>
              <Link to="">
                <BoxBusiness>
                  <CircleImg></CircleImg>
                </BoxBusiness>
              </Link>
              <h3>aaaaaa</h3>
              <p>bbbbbb</p>
            </DivBusiness>

            <DivBusiness>
              <Link to="">
                <BoxBusiness>
                  <CircleImg></CircleImg>
                </BoxBusiness>
              </Link>
              <h3>aaaaaa</h3>
              <p>bbbbbb</p>
            </DivBusiness>
          </SectionBusiness>
        </MainTrades>
        <CadastreComercio>
          <h2>Cadastre um novo comércio</h2>

          <Link to="/cadastrocomercio">
            <ButtonStyled>Cadastrar</ButtonStyled>
          </Link>
        </CadastreComercio>
      </PerfilDiv>
      </Wrapper>
      <Toaster/>
    </>
  );
}
