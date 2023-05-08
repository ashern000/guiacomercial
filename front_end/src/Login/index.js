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

export default function Login() {
  const navigate = useNavigate()
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

    let api = await axios.post("http://localhost:4040/login", {
      emailDeUsuario: email,
      senhaDeUsuario: senha,
    });
    if(api.data.statusLogin == true){
      alert("Seja bem vindo!")
      navigate("/perfil")
    } else {
      console.log(api.data.statusLogin);
    }

  };
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
                <p> Cadastre-se! </p>
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
