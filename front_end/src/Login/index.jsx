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
  DivLoader,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { api } from "../services/api";
import toast, { Toaster } from "react-hot-toast";
import SyncLoader from "react-spinners/SyncLoader";
import { useContext } from "react";
import { usuarioContext } from "../contexts/usuarioContext";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [loading, setLoading] = useState(false);
  const {token, setToken} = useContext(usuarioContext);

  useEffect(()=>{
    if(token == true){
      navigate("/perfil")
    }
  })

  const loginUsuario = async (e) => {
    e.preventDefault();
    if (!email || !senha) {
      toast.error("Por favor, insira os dados");
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      await api
        .post("/login", {
          emailDeUsuario: email,
          senhaDeUsuario: senha,
        })
        .then((res) => {
          toast.success(res.data.msg);
          document.cookie = `access-token=${res.data.usuario.token}`;
          setToken(true)
          localStorage.setItem("token",true)
          setTimeout(() => navigate("/perfil"), 1000);
        })
        .catch((err) => {
          toast.error(err.response.data.mensagem);
        });
    }
  };
  return (
    <>
      {loading ? (
        <DivLoader>
          <SyncLoader color="blue" />
        </DivLoader>
      ) : (
        <AlignDiv>
          <Wrapper>
            <LoginStyled>
              <AreaCadastro>
                <h1> Bem vindo(a) ao Comart! </h1>
                <ImgLogin />
                <TextCadastro>
                  <p> Você não tem cadastro? </p>
                  <Link to="/cadastro">
                    {" "}
                    <h4> Cadastre-se! </h4>{" "}
                  </Link>
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
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Senha"
                      onChange={(e) => setSenha(e.target.value)}
                    />
                    <ButtonStyled type="submit" onClick={loginUsuario}>
                      {" "}
                      Entrar{" "}
                    </ButtonStyled>
                  </form>
                  <Link to="/">
                    <p>Esqueci a senha.</p>
                  </Link>
                </FormLogin>
              </AreaLogin>
            </LoginStyled>
          </Wrapper>
        </AlignDiv>
      )}
      <Toaster />
    </>
  );
}
