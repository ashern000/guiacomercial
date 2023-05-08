import {
  CadastroStyled,
  ButtonStyled,
  AreaHome,
  AreaCadastro,
  ImgComercio,
  BackHome,
  FormCadastro,
  LogoSite,
  TextLogin,
  Wrapper,
  AlignDiv,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [senha, setSenha] = useState(null);
  const [senhaConfirm, setSenhaConfirm] = useState(null);

  const cadastrarUsuario = async (event) => {
    event.preventDefault();

    if (!nome || !email || !cpf || !senha === null) {
      alert("Insira os dados");
    } else {
      if (senhaConfirm !== senha) {
        alert("As senhas não são iguais");
      } else {
        await api
          .post("/usuario/signup", {
            nomeDeUsuario: nome,
            emailDeUsuario: email,
            cpfDoUsuario: cpf,
            senhaDeUsuario: senha,
          })
          .then((response) => {alert(response.data.msg); navigate("/perfil")}).catch(error => console.log(error))
          
        }
    }
  };
  return (
    <>
      <AlignDiv>
        <Wrapper>
          <CadastroStyled>
            <AreaCadastro>
              <BackHome>
                <p>
                  <Link to="/login">
                    <IoIosArrowBack size={20} />
                  </Link>
                </p>
              </BackHome>
              <LogoSite />
              <FormCadastro onSubmit={cadastrarUsuario}>
                <h2>Cadastre-se!</h2>

                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  placeholder="Nome completo"
                />
                <input
                  onChange={(e) => setCpf(e.target.value)}
                  type="text"
                  placeholder="CPF"
                />
                <input
                  onChange={(e) => setSenha(e.target.value)}
                  type="password"
                  placeholder="Senha"
                />
                <input
                  onChange={(e) => setSenhaConfirm(e.target.value)}
                  type="password"
                  placeholder="Confirme sua senha"
                />

                <ButtonStyled type="submit"> Cadastrar </ButtonStyled>
                <TextLogin>Já possui login? Clique aqui.</TextLogin>
              </FormCadastro>
            </AreaCadastro>

            <AreaHome></AreaHome>
          </CadastroStyled>
        </Wrapper>
      </AlignDiv>
    </>
  );
}
