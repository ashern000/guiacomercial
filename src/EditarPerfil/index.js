import {
  ButtonStyled,
  FormStyled,
  ImgPerfil,
  InfoPerfil,
  AlterarStyled,
  Wrapper
} from "./styles";
import Header from "../components/Header";

export default function CadastroComercio() {
  return (
    <>
      <Header />
      <Wrapper>
        <InfoPerfil>
          <h2>Editar Perfil</h2>
          <ImgPerfil />
          <p>Editar foto de perfil</p>
        </InfoPerfil>
        <FormStyled>
          <form>
            <input type="text" placeholder="Nome do Usuário:" />
            <input type="email" placeholder="E-mail:" />
            <input type="password" placeholder="Senha:" />
          </form>
          <AlterarStyled>
            <a href="#"> <p> Alterar Senha </p></a>
          </AlterarStyled>
          <ButtonStyled type="submit"> Salvar </ButtonStyled>
        </FormStyled>
      </Wrapper>
    </>
  );
}
