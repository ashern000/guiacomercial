import { ButtonStyled, FormStyled, LogoSite, FormCadEmpresa, InputHora, InputFile, Wrapper } from "./styles";
import Header from "../components/Header";

//import { FiSearch } from "react-icons/fi"; 


export default function CadastroComercio() {
  return (
    <>
      <Header />
      <Wrapper>
      <FormCadEmpresa>
        <FormStyled>
        <LogoSite />
          <form>
          <h2>Cadastre seu Comércio</h2>
            <input type="text" required placeholder="Nome da Empresa:" />
            <input type="email" required placeholder="E-mail da Empresa:" />
            <input type="tel" required placeholder="Telefone:" />
            <input type="text" required placeholder="CNPJ:" />
            <input type="text" required placeholder="Cidade:" />
            <input type="text" required placeholder="Rua:" />
            <input type="text" required placeholder="Bairro:" />
            <input type="text" required placeholder="N°" />
            <InputHora>
              <select id="horarioInicial" required>
                <option id="default" value="0" selected>Hora Inicial</option>
                <option value="1">07:00</option>
                <option value="2">08:00</option>
                <option value="3">09:00</option>
                <option value="4">10:00</option>
                <option value="5">11:00</option>
              </select>

              <select id="horarioFinal" required>
                <option id="default" value="0" selected>Hora Final</option>
                <option value="1">17:00</option>
                <option value="2">18:00</option>
                <option value="3">19:00</option>
                <option value="4">20:00</option>
                <option value="5">21:00</option>
                <option value="6">22:00</option>
                <option value="7">23:00</option>
                <option value="8">00:00</option>
              </select>
            </InputHora>
            <InputFile>
              <input id="file" type="file" />
            </InputFile>
            <ButtonStyled onClick={formButton} type="submit"> Cadastrar </ButtonStyled>
          </form>
        </FormStyled>
      </FormCadEmpresa>
      </Wrapper>
    </>
  )
}

function formButton() {
  let inicio = document.getElementById("horarioInicial");
  let final = document.getElementById("horarioFinal");

  if (inicio.value === 0) {
    alert("Selecione um horário de abertura")
  }
  else if (final.value === 0) {
    alert("Selecione um horário de encerramento")
  } else {

  }
}