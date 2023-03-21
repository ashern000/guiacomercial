import { LoginStyled, ButtonStyled, AreaCadastro, AreaLogin, ImgComercio, BackHome } from "./styles";
import { Link } from "react-router-dom";
import {IoIosArrowBack} from "react-icons/io";

export default function Login() {
  return (
    <>
      <LoginStyled>
      <AreaCadastro>
          <ImgComercio/>
          <p>Voltar para página inicial</p>
      </AreaCadastro>
      <AreaLogin>
      <BackHome>
     <p><Link to="/login"><IoIosArrowBack size={20}/></Link></p>
      </BackHome>
      <h2>Cadastre-se!</h2>
          <form>
            <input type="text" placeholder="Email:" />
            <input type="text" placeholder="Nome completo:" />
            <input type="text" placeholder="CPF:" />
            <input type="password" placeholder="Senha:" />
            <input type="password" placeholder="Confirme sua Senha:" />
          </form>
          <ButtonStyled type="submit"> Cadastrar </ButtonStyled>
          </AreaLogin>
      </LoginStyled>
    </>
  )
}