import { NavBar, OpDiv, Option, Select } from "./styles";
export default function NavSubCategorias() {
  function Teste() {
    window.location.href = "https://youtube.com";
  }
  return (
    <>
      <NavBar>
        <OpDiv>
          <Option> <p> Mercados </p></Option>
          <Option> <p> Loja de Calçados </p></Option>
          <Option> <p> Restaurantes </p></Option>
          <Option>Todas Opções
            <Select>
              <option selected></option>
              <option id="option1" onClick={Teste}>ABC</option>
              <option>aaa</option>
            </Select>
          </Option>
        </OpDiv>
      </NavBar>
    </>
  );

}