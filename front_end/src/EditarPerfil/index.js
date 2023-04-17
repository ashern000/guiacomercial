import { ButtonStyled, FormStyled, ImgPerfil,InfoPerfil, AlterarStyled } from "./styles";
import Header from "../components/Header";

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
          <AlterarStyled>
            <p>Alterar senha</p>
          </AlterarStyled>
        <ButtonStyled type="submit"> Salvar </ButtonStyled>
    </FormStyled>
    </>
  )
}