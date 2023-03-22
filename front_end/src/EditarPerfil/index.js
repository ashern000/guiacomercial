import { ButtonStyled, FormStyled, ImgPerfil,InfoPerfil } from "./styles";
import { Link } from "react-router-dom";
import Header from "../components/Header";

//import { FiSearch } from "react-icons/fi"; 


export default function CadastroComercio() {
  return (
    <>
    <Header/>
    <InfoPerfil>
        <h2>Editar Perfil</h2>
    <ImgPerfil/>
    <p>Editar foto de perfil</p>
    </InfoPerfil>
    <FormStyled>
          <form>
            <input type="text" placeholder="Nome do Usuário:" />
            <input type="email" placeholder="E-mail:" />
            <input type="password" placeholder="Senha:" />
          </form>
        <ButtonStyled type="submit"> Salvar </ButtonStyled>
    </FormStyled>
    </>
  )
}