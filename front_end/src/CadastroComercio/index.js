import {
  ButtonStyled,
  FormStyled,
  LogoSite,
  FormCadEmpresa,
  InputHora,
  InputFile,
  Wrapper,
} from "./styles";
import Header from "../components/Header";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import api from "../services/api.js";

export default function CadastroComercio() {
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [emailEmpresa, setEmailEmpresa] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");

  const cadastrarEmpresa = async(e) => {
    e.preventDefault();
    if (
      !nomeEmpresa ||
      !emailEmpresa ||
      !telefone ||
      !cnpj ||
      !cidade ||
      !rua ||
      !bairro ||
      !numero
    ) {
      toast.error("Insira os dados, por favor!");
    }else{

    await api.post("/empresas",{

    }).then((res)=>toast.success("Empresa cadastrada!")).catch(()=>{toast.error("Erro ao cadastrar. Tente novamente!")})}
  };

  return (
    <>
      <Header />
      <Wrapper>
        <FormCadEmpresa>
          <FormStyled>
            <LogoSite />
            <form>
              <h2>Cadastre seu Comércio</h2>
              <input type="text" onChange={(e)=>setNomeEmpresa(e.target.value)}  placeholder="Nome da Empresa:" />
              <input type="email" onChange={(e)=>setEmailEmpresa(e.target.value)}  placeholder="E-mail da Empresa:" />
              <input type="tel" onChange={(e)=>setTelefone(e.target.value)} placeholder="Telefone:" />
              <input type="text" onChange={(e)=>setCnpj(e.target.value)} placeholder="CNPJ:" />
              <input type="text" onChange={(e)=>setCidade(e.target.value)} placeholder="Cidade:" />
              <input type="text" onChange={(e)=>setRua(e.target.value)}  placeholder="Rua:" />
              <input type="text" onChange={(e)=>setBairro(e.target.value)} placeholder="Bairro:" />
              <input type="text" onChange={(e)=>setNumero(e.target.value)} placeholder="N°" />
              <InputHora>
                <select id="horarioInicial" >
                  <option id="default" value="0" selected>
                    Hora Inicial
                  </option>
                  <option value="1">07:00</option>
                  <option value="2">08:00</option>
                  <option value="3">09:00</option>
                  <option value="4">10:00</option>
                  <option value="5">11:00</option>
                </select>

                <select id="horarioFinal" >
                  <option id="default" value="0" selected>
                    Hora Final
                  </option>
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
              <ButtonStyled onClick={cadastrarEmpresa} type="submit">
                {" "}
                Cadastrar{" "}
              </ButtonStyled>
            </form>
          </FormStyled>
        </FormCadEmpresa>
      </Wrapper>
      <Toaster />
    </>
  );
}
