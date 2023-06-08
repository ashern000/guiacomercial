import {
  CadastroStyled,
  ButtonStyled,
  AreaHome,
  AreaCadastro,
  BackHome,
  FormCadastro,
  LogoSite,
  TextLogin,
  Wrapper,
  AlignDiv,
  TextWelcome,
  ImageCadastro,
  DivLoader,
} from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [senha, setSenha] = useState(null);
  const [senhaConfirm, setSenhaConfirm] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const cadastrarUsuario = async (e) => {
    e.preventDefault();

    if (!nome || !email || !cpf || !senha || !avatar) {
      toast.error("Por favor insira os dados");
    } else if (senhaConfirm !== senha) {
      toast.error("As senhas não são iguais");
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setAvatar(null);
        setCpf(null);
        setEmail(null);
        setNome(null);
        setSenhaConfirm(null);
      }, 5000);
      await api
        .post("/usuario/signup", {
          nomeDeUsuario: nome,
          emailDeUsuario: email,
          cpfDoUsuario: cpf,
          senhaDeUsuario: senha,
          avatarUsuario: avatar,
        })
        .then((response) => {
          
          document.cookie = `access_token=${response.data.usuario.token}`;

          toast.success("Sucesso!");
          setTimeout(() => {
            navigate("/perfil")
          }, 750);
        })
        .catch((response) => {
          setTimeout(() => {
            navigate("/cadastro");
            toast.error("Erro ao cadastrar, tente novamente!");
          }, 1000);
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

                  <input
                    onChange={(e) => setAvatar(e.target.value)}
                    type="text"
                    placeholder="Avatar"
                  />

                  <ButtonStyled type="submit"> Cadastrar </ButtonStyled>
                  <TextLogin>
                    {" "}
                    <a href="#"> Já possui login? Clique aqui. </a>
                  </TextLogin>
                </FormCadastro>
              </AreaCadastro>

              <AreaHome>
                <TextWelcome>
                  <h1>Seja Bem Vindo ao COMART.</h1>
                  <h2>
                    Cadastre-se e encontre os principais comércios por aqui!
                  </h2>
                  <ImageCadastro />
                </TextWelcome>
              </AreaHome>
            </CadastroStyled>
          </Wrapper>
        </AlignDiv>
      )}
      <Toaster />
    </>
  );
}
