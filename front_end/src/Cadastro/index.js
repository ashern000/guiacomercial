import { ButtonStyled, CadastroStyled, EmailStyled, NomeStyled, CPFStyled, SenhaStyled, ConfirmeStyled, LogoStyled } from "./styles";
import {Link} from "react-router-dom";
//import { FiSearch } from "react-icons/fi"; 


export default function Cadastro(){
    return(
    <>
    <LogoStyled></LogoStyled>

    <CadastroStyled>
    <h1>Cadastre-se</h1>
    

    <EmailStyled>
        <form>
            <input type="text" placeholder="Email:"/>
        </form>
    </EmailStyled>
    <NomeStyled>
        <form>
            <input type="password" placeholder="Nome:" />
        </form>
    </NomeStyled>
    <CPFStyled>
        <form>
            <input type="password" placeholder="CPF/CNPJ:" />
        </form>
    </CPFStyled>
    <SenhaStyled>
        <form>
            <input type="password" placeholder="Senha:" />
        </form>
    </SenhaStyled>
    <ConfirmeStyled>
        <form>
            <input type="password" placeholder="Confirme sua Senha:" />
        </form>
    </ConfirmeStyled>


<Link to="/"><ButtonStyled> Cadastrar </ButtonStyled></Link>
    </CadastroStyled>
    </>
    )
}