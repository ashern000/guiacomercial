import { LoginStyled, ButtonStyled, AreaCadastro, AreaLogin, ImgComercio } from "./styles";
import { Link } from "react-router-dom";
//import { FiSearch } from "react-icons/fi"; 


export default function Login() {
  return (
    <>
      <LoginStyled>
      <AreaCadastro>
          <ImgComercio/>
          <ButtonStyled>Cadastrar</ButtonStyled>
      </AreaCadastro>
      <AreaLogin>
      <h2>Faça seu Login</h2>
          <form>
            <input type="text" placeholder="Email:" />
            <input type="password" placeholder="Senha:" />
          </form>
          <ButtonStyled type="submit"> Entrar </ButtonStyled>
          <Link to="/"><p>Esqueci a senha.</p></Link>
          </AreaLogin>
      </LoginStyled>
    </>
  )
}