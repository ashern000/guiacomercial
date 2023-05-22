import {
  LoginStyled,
  ButtonStyled,
  AreaCadastro,
  AreaLogin,
  ImgComercio,
  BackHome,
  FormLogin,
  LogoSite,
  Wrapper,
  AlignDiv,
  ImgLogin,
  TextCadastro,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  function valorInputEmail(e) {
    setEmail(e.target.value);
  }

  function valorInputSenha(e) {
    setSenha(e.target.value);
  }

  const loginUsuario = async (e) => {
    e.preventDefault();
    if(!email || !senha){
      alert("Por favor, insira os dados")
    }else{
    await api
      .post("/login", {
        emailDeUsuario: email,
        senhaDeUsuario: senha,
      })
      .then((res) => {
        if (res.data.statusLogin == true) {
          alert(res.data.msg);
          navigate("/perfil");
        }
      })
      .catch((err) => {
        alert(err.response.data.mensagem);
      });
  }};
  return (
    <>
      <AlignDiv>
        <Wrapper>
          <LoginStyled>
            <AreaCadastro>
              <h1> Bem vindo(a) ao Comart! </h1>
              <ImgLogin />
              <TextCadastro>
                <p> Você não tem cadastro? </p>
                <Link to="/cadastro"> <h4> Cadastre-se! </h4> </Link>
              </TextCadastro>
            </AreaCadastro>
            <AreaLogin>
              <BackHome>
                <p>
                  <Link to="/home">
                    <IoIosArrowBack size={20} />
                  </Link>
                </p>
              </BackHome>
              <LogoSite />
              <FormLogin onSubmit={loginUsuario}>
                <h2>Faça seu login</h2>
                <form>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={valorInputEmail}
                  />
                  <input
                    type="password"
                    placeholder="Senha"
                    onChange={valorInputSenha}
                  />
                  <ButtonStyled type="submit"> Entrar </ButtonStyled>
                </form>
                <Link to="/">
                  <p>Esqueci a senha.</p>
                </Link>
              </FormLogin>
            </AreaLogin>
          </LoginStyled>
        </Wrapper>
      </AlignDiv>
    </>
  );
}
