import { ButtonStyled, FormStyled } from "./styles";
import Header from "../components/Header";

//import { FiSearch } from "react-icons/fi"; 


export default function CadastroComercio() {
  return (
    <>
      <Header/>
    <FormStyled>
      <h2>Cadastre seu Comércio</h2>
          <form>
            <input type="text" placeholder="Nome da Empresa:" />
            <input type="email" placeholder="E-mail da Empresa:" />
            <input type="tel" placeholder="Telefone:" />
            <input type="text" placeholder="CNPJ:" />
            <input type="text" placeholder="Endereço:" />
            <input type="datetime" placeholder="Horário de Funcionamento:" />
          </form>
        <ButtonStyled type="submit"> Cadastrar </ButtonStyled>
    </FormStyled>
    </>
  )
}