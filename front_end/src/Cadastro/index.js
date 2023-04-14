import { CadastroStyled, ButtonStyled, AreaHome, AreaCadastro, ImgComercio, BackHome, FormCadastro, LogoSite } from "./styles";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function Login() {
  return (
    <>
      <CadastroStyled>
        <AreaHome>
          <ImgComercio />
          <Link to="/login"><p>Já possue login? Clique aqui.</p></Link>
        </AreaHome>
        <AreaCadastro>
          <BackHome>
            <p><Link to="/login"><IoIosArrowBack size={20} /></Link></p>
          </BackHome>
          <LogoSite/>
          <FormCadastro>
          <h2>Cadastre-se!</h2>
          <form>
            <input type="email" placeholder="Email:" />
            <input type="text" placeholder="Nome completo:" />
            <input type="text" placeholder="CPF:" />
            <input type="password" placeholder="Senha:" />
            <input type="password" placeholder="Confirme sua Senha:" />
          </form>
          <ButtonStyled type="submit"> Cadastrar </ButtonStyled>
          </FormCadastro>
        </AreaCadastro>
      </CadastroStyled>
    </>
  )
}