import { LoginStyled, ButtonStyled, AreaCadastro, AreaLogin, ImgComercio, BackHome, FormLogin, LogoSite } from "./styles";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function Login() {
  return (
    <>
      <LoginStyled>
        <AreaCadastro>
          <ImgComercio />
          <Link to="/cadastro"><p>Não possue conta? Cadastre-se</p></Link>
        </AreaCadastro>
        <AreaLogin>
          <BackHome>
            <p><Link to="/home"><IoIosArrowBack size={20} /></Link></p>
          </BackHome>
          <LogoSite />
          <FormLogin>
            <h2>Faça seu login</h2>
            <form>
              <input type="email" placeholder="Email:" />
              <input type="password" placeholder="Senha:" />
            </form>
            <ButtonStyled type="submit"> Entrar </ButtonStyled>
            <Link to="/"><p>Esqueci a senha.</p></Link>
          </FormLogin>
        </AreaLogin>
      </LoginStyled>
    </>
  )
}