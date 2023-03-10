import { LoginStyled, ButtonStyled, EmailStyled, SenhaStyled } from "./styles";
import {Link} from "react-router-dom";
//import { FiSearch } from "react-icons/fi"; 


export default function Login(){
    return(
    <>
    <LoginStyled>
    <h1>Faca seu Login</h1>
    
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

    </LoginStyled>
    </>
    )
}