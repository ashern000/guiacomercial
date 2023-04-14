import {
    PerfilDiv, InfoDiv, ImgPerfil, BoxBusiness, MainTrades, DivBusiness,
    SectionBusiness, CircleImg, CadastreComercio, ButtonStyled
} from "./styles";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Perfil() {
    return (
        <>
            <Header />
            <PerfilDiv>
                <InfoDiv>
                    <ImgPerfil />
                    <h3>Vagner Love</h3>
                    <Link to="/editarperfil"><p>Editar dados pessoais</p></Link>
                </InfoDiv>

                <MainTrades>
                    <h1>Meus comércios cadastrados</h1>
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
                    </SectionBusiness>
                </MainTrades>
                <CadastreComercio>
                    <h2>Cadastre um novo comércio</h2>

                    <Link to="/cadastrocomercio"><ButtonStyled>Cadastrar</ButtonStyled></Link>
                </CadastreComercio>

            </PerfilDiv>
        </>
    )
}