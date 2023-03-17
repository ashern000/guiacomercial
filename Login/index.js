import { LoginStyled, ButtonStyled, EmailStyled, SenhaStyled, EsqueceuStyled, CadastrarStyled } from "./styles";
import {Link} from "react-router-dom";
//import { FiSearch } from "react-icons/fi"; 


export default function Login(){
    return(
    <>
    <LoginStyled>
    <h1>Faça seu Login</h1>
    
<EmailStyled>
  <form>
    <input type="text" placeholder="Email:"/>
  </form>
</EmailStyled>

<SenhaStyled>
  <form>
      <input type="password" placeholder="Senha:" />
  </form>
</SenhaStyled>

<Link to="/"><ButtonStyled> Entrar </ButtonStyled></Link>

<EsqueceuStyled>
  <Link to="/"> <p>Esqueceu a senha ? </p></Link>
</EsqueceuStyled>

<CadastrarStyled>
  <Link to="/"> Cadastra-se já </Link>
</CadastrarStyled>

    </LoginStyled>
    </>
    )
}